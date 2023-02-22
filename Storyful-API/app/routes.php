<?php

use Slim\App;
use App\Http\Controllers\UserController;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;

return function(App $app) {
    // $app->get('/users', [UserController::class, 'findAll']);

    $app->group('/users', function() use ($app) {
        $app->get('', [UserController::class, 'findAll']);
    });
}

?>