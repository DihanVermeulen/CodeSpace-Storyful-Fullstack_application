<?php

// error reporting

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// ---- CORS ----

header("Access-Control-Allow-Origin: *"); // allow any origin to access resources on this API
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH"); // Allow the following HTTP methods on this API


require_once __DIR__ . "/../vendor/autoload.php";

// ---- Slim requires ----
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

// ---- App requires ----
use Model\Student;
use Data\StudentDAO;
use Config\DatabaseConfig;

# ========== Create Slim app object ==========

// Create new Slim app
$app = new App();


# ========== Define app routes ==========

// ====== Root endpoint ======
    $app->get('/', function(Request $request,Response $response, $args) {

        return $response->getBody()->write("Hello User \n 
            ----- List of routes: -----\n
            1) GET : /api/students \n
            2) GET : /api/students/{index} \n
            3) POST : /api/students \n
            4) PUT : /api/students \n
            5) DELETE : /api/students/{index} \n
        ");
    });


// ====== CREATE ======
    $app->post('/api/students', function (Request $request, Response $response, $args) {

  
    });


// ====== READ ======
    $app->get('/api/students/{index}', function (Request $request, Response $response, $args) {


    });


// ====== READ_ALL ======
    $app->get('/api/students', function (Request $request, Response $response, $args) {
        

    });

    
// ====== PUT ======
    $app->put('/api/students', function (Request $request, Response $response, $args) {


    });


// ====== DELETE ======
    $app->delete('/api/students/{index}', function (Request $request, Response $response, $args) {
        

    });


// ====== RETURN 404 IF NOT ONE OF THE FOLLOWING: ======
    $app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
        $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
        return $handler($req, $res);
    });


// Run app
$app->run();