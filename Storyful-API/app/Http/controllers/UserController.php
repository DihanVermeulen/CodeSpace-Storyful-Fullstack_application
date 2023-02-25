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
    {
        $db = $this->container->get('db');
        $users = $db->query('SELECT * FROM users');
        $rows = $users->fetchAll();
        $response->getBody()->write(json_encode($rows));
        return $response->withHeader('Content-Type', 'application/json');
    }
    public function authenticate(Request $request, Response $response)
    {
        $userPayload = $request->getBody()->getContents();
        $parsedUserPayload = json_decode($userPayload, true);

        $user = authenticateUser($userPayload, $userPayload);
        if (!$user) {
            $response = $response
                ->withHeader("Content-Type", "application/json")
                ->withStatus(401);
            $response->getBody()->write(array("error" => "Invalid credentials"));
            return $response;
        } else {
            $jwtPayload = array(
                "sub" => "602e44f96ee4c",
                "username" => "guest.test",
                "exp" => time() + 259200 // Token expires in 3 days
            );
            $jwt = \Firebase\JWT\JWT::encode($jwtPayload, \App\Interfaces\KeyInterface::JWT_KEY, 'HS256');
            $response->getBody()->write(json_encode(array("jwt" => $jwt)));
            return $response->withHeader("Content-Type", "application/json");
        }
    }
}
