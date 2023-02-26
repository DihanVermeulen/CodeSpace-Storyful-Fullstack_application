<?php

use Slim\App;
use Tuupola\Middleware\JwtAuthentication;
use Psr\Http\Message\ResponseInterface as Response;

return function(App $app) {
    $setting = $app->getContainer()->get('settings');

    $app->addErrorMiddleware(
        $setting['displayErrorDetails'],
        $setting['logErrors'],
        $setting['logErrorDetails']
    );

    $app->add(new JwtAuthentication([
        "path" => "/",
        "algorithm" => ["HS256"],
        "ignore" => ["/users/authenticate", "/stories", "/users/register"],
        "secret" => \App\Interfaces\KeyInterface::JWT_KEY,
        "error" => function (Response $response, $arguments) {
            $data = array("error" => "Invalid token");
            $response = $response->withHeader("Content-Type", "application/json");
            $response = $response->withStatus(401);
            $response->getBody()->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
            return $response;
        },
    ]));

    $app->addBodyParsingMiddleware();
}

?>