<?php

use DI\Container;
use App\Models\User;
use \DI\Bridge\Slim\Bridge as SlimAppFactory;

require __DIR__ . './../vendor/autoload.php';

$container = new Container;

$app = SlimAppFactory::create($container);

$settings = require __DIR__ . './../app/settings.php';
$settings($container);

$middleware = require __DIR__ . './../app/middleware.php';
$middleware($app);

$routes = require __DIR__ . './../app/routes.php';
$routes($app);

$app->run();
