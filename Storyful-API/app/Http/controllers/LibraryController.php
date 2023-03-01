<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use PDOException;
use Psr\Container\ContainerInterface;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;

class LibraryController
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }


    public function getUserLibrary(Response $response, $id)
    {
        $db = $this->container->get('db');

        $library = $db->query("SELECT *
        FROM library
        JOIN stories
        ON library.story_id = stories.id
        WHERE library.user_id = '{$id}'");
        $rows = $library->fetchAll();

        $response->getBody()->write(json_encode($rows));
        return $response
            ->withHeader("Content-Type", "application/json");
    }

    public function addStoryToLibrary(Request $request, Response $response)
    {
        $request_data = $request->getBody()->getContents();
        $parsed_data = json_decode($request_data, true);
        $db = $this->container->get('db');
        $user_id = $parsed_data['user_id'];
        $story_id = $parsed_data['story_id'];
        $status = $parsed_data['status'];


        try {
            $statement = $db->prepare("INSERT INTO library (user_id, story_id, status) VALUES(?,?,?)");
            $statement->execute([$user_id, $story_id, $status]);
            $response->getBody()->write(json_encode(array(
                "message" => "success"
            )));
            return $response
                ->withHeader("Content-Type", "application/json");
        } catch (PDOException $error) {
            if ($error->getCode() == "23000") {
                // This is a database constraint violation, indicating a duplicate row
                $response->getBody()->write(json_encode(array("error" => "Duplicate row")));
            } else {
                // Other database error occurred
                $response->getBody()->write(json_encode(array("error" => $error)));
            }
            return $response;
        }
    }

    public function updateStoryState(Request $request, Response $response, $id)
    {
        $request_data = $request->getBody()->getContents();
        $parsed_data = json_decode($request_data, true);



        // $response->getBody()->write(json_encode(array($parsed_data)));

        // return $response
        //     ->withHeader("Content-Type", "application/json");
        try {
            $db = $this->container->get('db');
            // $statement = $db->prepare("UPDATE library set status = '" + $parsed_data['status'] + "' WHERE user_id = '{id}'");
            $statement = $db->prepare("UPDATE library set status = ? WHERE user_id = ? AND story_id = ?");
            $statement->execute([$parsed_data['status'], $id, $parsed_data['story_id']]);

            $response->getBody()->write(json_encode(array("message" => "success")));

            return $response
                ->withHeader("Content-Type", "application/json");
        } catch (PDOException $error) {
            $response->getBody()->write(json_encode(array("message" => $error)));
            return $response
                ->withHeader("Content-Type", "application/json");
        }
    }
}
