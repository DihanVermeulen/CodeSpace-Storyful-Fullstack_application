<?php

use Slim\App;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StoryController;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function(App $app) {
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
