<?php

use Slim\Factory\AppFactory;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;

require __DIR__ . './../vendor/autoload.php';

$app = AppFactory::create();

$app->get('/', function (Request $request, Response $response) {
    $response->getBody()->write('Hello World!');
    return $response;
});

$app->run();