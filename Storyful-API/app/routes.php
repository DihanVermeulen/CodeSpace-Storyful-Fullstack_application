<?php

use Slim\App;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StoryController;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function(App $app) {
    // enable CORS
    $app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
    });

    $app->add(function ($request, $handler) {
        $response = $handler->handle($request);
        return $response
                ->withHeader('Access-Control-Allow-Origin', '*')
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    });

    $app->group('/users', function (Group $group) {
        $group->get('', [UserController::class, 'findAll']);
        $group->get('/{id}', [UserController::class, 'findUserByID']); 
        $group->post('/register', [UserController::class, 'createUser']); 
        $group->post('/authenticate', [UserController::class, 'authenticate']);
    });

    $app->group('/stories', function (Group $group) {
        $group->get('', [StoryController::class, 'findAll']);
    });
}

?>