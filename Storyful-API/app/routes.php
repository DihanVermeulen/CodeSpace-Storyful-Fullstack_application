<?php

use Slim\App;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;

return function(App $app) {
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write('Hello World!');
        return $response;
    });
}

?>