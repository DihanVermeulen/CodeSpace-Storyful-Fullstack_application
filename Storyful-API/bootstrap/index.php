<?php

use DI\Container;
use Slim\Factory\AppFactory;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;

require __DIR__ . './../vendor/autoload.php';
$settings = require __DIR__ . './../app/settings.php';

$container = new Container;

AppFactory::setContainer($container);
$app = AppFactory::create();
$app->addErrorMiddleware(true, true, true);

$app->get('/', function (Request $request, Response $response) {
    $response->getBody()->write('Hello World!');
    return $response;
});

$app->run();
