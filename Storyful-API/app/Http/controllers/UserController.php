<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Psr\Container\ContainerInterface;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;
use Src\Domain\User\User;
use App\Authenticate\Authenticate;
use PDOException;

class UserController
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Finds all users in the database
     */
    public function findAll(Response $response)
    {
        $db = $this->container->get('db');
        $users = $db->query('SELECT * FROM users');
        $rows = $users->fetchAll();
        $response->getBody()->write(json_encode($rows, JSON_PRETTY_PRINT));
        return $response
            ->withHeader('Content-Type', 'application/json');
    }

    /**
     * Finds user by ID
     * @param mixed $id id passed in to search param
     */
    public function findUserByID(Response $response, $id)
    {
        $db = $this->container->get('db');
        $user = $db->query("SELECT * FROM users WHERE id = '{$id}'");
        $rows = $user->fetchAll();
        $response->getBody()->write(json_encode($rows, JSON_PRETTY_PRINT));
        return $response->withHeader('Content-Type', 'application/json');
    }

    /**
     * Creates a new user and adds user to database if 
     * there are no errors
     */
    public function createUser(Request $request, Response $response)
    {
        $user_payload = $request->getBody()->getContents();
        $random_string = substr(md5(microtime()), rand(0, 26), 6);
        $parsed_user_payload = json_decode($user_payload, true);
        $user = new User(null, $parsed_user_payload["username"], $parsed_user_payload["email"], $parsed_user_payload["password"], $random_string);
        $user_json_object = $user->jsonSerialize();
        try {
            $db = $this->container->get('db');
            $statement = $db->prepare("INSERT INTO users (id, username, email, password, avatar ) VALUES(?,?,?,?,?)");
            $statement->execute([$user_json_object['id'], $user_json_object['username'], $user_json_object['email'], $user_json_object['password'], $user_json_object['avatar']]);
            $response->getBody()->write(json_encode(array("message" => "Successfully created user")));
            return $response
                ->withHeader("Content-Type", "application/json")
                ->withStatus(200);
        } catch (PDOException $error) {
            $response->getBody()->write(json_encode(array("error" => $error)));
            return $response
                ->withHeader("Content-Type", "application/json")
                ->withStatus(400);
        }
    }

    /**
     * Authenticates user and return JWT token if there
     * are no errors
     */
    public function authenticate(Request $request, Response $response)
    {
        $user_payload = $request->getBody()->getContents();
        $parsed_user_payload = json_decode($user_payload, true);

        $authenticator = new Authenticate($this->container);
        $user = $authenticator->authenticateUser($parsed_user_payload["email"], $parsed_user_payload["password"]);

        if (!$user) {
            $response->getBody()->write(json_encode(array("error" => "Invalid credentials")));
            return $response
                ->withHeader("Content-Type", "application/json")
                ->withStatus(401);
        } else {
            $jwtPayload = array(
                "iat" => time(),
                "id" => $user['id'],
                "username" => $user['username'],
                "email" => $user['email'],
                "exp" => time() + 259200 // Token expires in 3 days
            );
            $jwt = \Firebase\JWT\JWT::encode($jwtPayload, \App\Interfaces\KeyInterface::JWT_KEY, 'HS256');
            $response->getBody()->write(json_encode(array("jwt" => $jwt)));
            return $response
                ->withHeader("Content-Type", "application/json")
                ->withStatus(200);
        }
    }
}
