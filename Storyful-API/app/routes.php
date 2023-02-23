<?php

use Slim\App;
use App\Http\Controllers\UserController;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function(App $app) {
    $app->group('/users', function (Group $group) {
        $group->get('', [UserController::class, 'findAll']);
        $group->get('/{id}', [UserController::class, 'findUserByID']); 
        $group->post('', [UserController::class, 'createUser']); 
    });
}

?>
