<?php

namespace App\Http\Controllers;

use Psr\Container\ContainerInterface;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;

class StoryController
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function findAll(Request $request, Response $response)
    {
        $db = $this->container->get('db');
        $stories = $db->query('SELECT * FROM stories');
        $rows = $stories->fetchAll();
        $response->getBody()->write(json_encode($rows, JSON_PRETTY_PRINT));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withHeader('Access-Control-Allow-Origin', '*');
    }
}
