<?php

namespace App\Http\Controllers;
use Psr\Container\ContainerInterface;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;
class UserController
{
    private $container;
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function findAll(Request $request, Response $response)
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
            ->withHeader('Content-Type', 'application/json')
            ->withHeader('Access-Control-Allow-Origin', '*');
    }

    /**
     * Finds user by ID
     * @param any $id id passed in to search param
     */
    public function findUserByID(Response $response, $id)
    {
        $db = $this->container->get('db');
        $user = $db->query("SELECT * FROM users WHERE id = '{$id}'");
        $rows = $user->fetchAll();
        $response->getBody()->write(json_encode($rows, JSON_PRETTY_PRINT));
        return $response->withHeader('Content-Type', 'application/json');
    }
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
                "sub" => "602e44f96ee4c",
                "username" => "guest.test",
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
