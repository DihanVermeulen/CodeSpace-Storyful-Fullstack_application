<?php

namespace Config;

class DatabaseConfig {
    

    private $host = "localhost";
    private $username = "root";
    private $password = "root";
    private $dbName = "students_slim";
    private $port = 3306; // only change port number if custom port is used


    public function connect() {

        $conn = new \mysqli($this->host, $this->username, $this->password, $this->dbName, $this->port);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error); //die function to close connection in case of error
        } else {
            return $conn;
        }
    }

}