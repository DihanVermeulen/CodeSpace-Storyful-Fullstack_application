<?php

use DI\Container;
use Slim\Factory\AppFactory;

require __DIR__ . './../vendor/autoload.php';

$container = new Container;

AppFactory::setContainer($container);

$app = AppFactory::create();

$middleware = require __DIR__ . './../app/middleware.php';
$middleware($app);

$settings = require __DIR__ . './../app/settings.php';
$settings($container);

$routes = require __DIR__ . './../app/routes.php';
$routes($app);

$app->run();
