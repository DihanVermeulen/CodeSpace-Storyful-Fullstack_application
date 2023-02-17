<?php

/**
 * Description: Data Access Object for racing_driver table
 * 
 * About: Class that interfaces with the project's database and contians all the data persistence
 *          logic when dealing with RacingDriver.php objects/instances
 * 
 * Author: justin@codespace.co.za
 */

namespace Data;

use Config\DatabaseConfig;
use Model\Student;

class StudentDAO {    
    
    // =================================== Fields =================================== //

    private DatabaseConfig $databaseConfig;

    // =================================== Constructor =================================== //

    public function __construct($databaseConfig) {
        
        $this->databaseConfig = $databaseConfig;

    }  
    
    // ====================================== CREATE ======================================

    public function create(Student $Student) {

        // connect to DB
        $conn = $this->databaseConfig->connect();

        // SQL statement
        $statement = "INSERT INTO student (name, class) VALUES (
            '" . $Student->getName() . "',
            '" . $Student->getClass() . "'
        )";

        if ($result = $conn->query($statement)) {

            $conn->close();
            return $result;
 
        } else {

            die("Connection failed: " . $conn->error); //die function to close connection in case of error
        
        }
    }


    // ====================================== Read by student no ======================================

    public function readByStudentNo(int $studentNo) {

        // connect to DB
        $conn = $this->databaseConfig->connect();

        // SQL statement
        $statement = "SELECT * FROM student WHERE student_no='$studentNo' ";

        if ($result = $conn->query($statement)) {

            // get only 1 single result
            $row = $result->fetch_object();

            // only call parse function if object exists in database, otherwise return nothing
            if ($row !== null) {
                
                $student = Student::createStudentFromDB($row); // static method in Post class to convert to Post class/type    # code...
                
                return $student;             
                $conn->close();
   
            }           

        } else {

            die("Connection failed: " . $conn->error); //die function to close connection in case of error
        }
    }

    
    // ====================================== Read All ======================================

    public function readAll() {

        // connect to DB
        $conn = $this->databaseConfig->connect();

        $studentsFromDb = [];

        $statement = "SELECT * FROM student";

        if ($result = $conn->query($statement)) {
            
            # loop over result, parse each object in $result to Model class
            while ($row = $result->fetch_object()) {

                $student = Student::createStudentFromDB($row); // static method in Post class to convert to Post class/type    # code...
                array_push($studentsFromDb, $student);
            }


            return $studentsFromDb; // return all drivers as array
            $conn->close(); // close connection

        } else {

            die("Connection failed: " . $conn->error); //die function to close connection in case of error
        }
    }


    // ====================================== Update ======================================

    public function update(Student $Student) {
    
        // connect to DB
        $conn = $this->databaseConfig->connect();

        // SQL statement
        $statement = "UPDATE student 
                      SET name = '" . $Student->getName() . "' , 
                          class = '" . $Student->getClass() . "' 
                      WHERE student_no = '" . $Student->getStudentNo() . "'
                    ";

        if ($result = $conn->query($statement)) {
            
            $conn->close();
            return $result;
            
        } else {

            die("Connection failed: " . $conn->error); //die function to close connection in case of error
       
        }
    }


    // ====================================== Delete ======================================

    public function deleteById(int $studentNo) {

        // connect to DB
        $conn = $this->databaseConfig->connect();

        // SQL statement
        $statement = "DELETE FROM student WHERE student_no='$studentNo' ";

        if ($result = $conn->query($statement)) {
            
            $conn->close(); 
            return $result;

        } else {

            die("Connection failed: " . $conn->error); //die function to close connection in case of error
        }   
    }
}