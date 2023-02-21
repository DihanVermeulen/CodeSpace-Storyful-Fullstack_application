<?php

use DI\Container;
use Slim\Factory\AppFactory;

require __DIR__ . './../vendor/autoload.php';

$settings = require __DIR__ . './../app/settings.php';
$middleware = require __DIR__ . './../app/middleware.php';
$container = new Container;

AppFactory::setContainer($container);

$app = AppFactory::create();
$middleware($app);
$settings($container);



$app->run();
