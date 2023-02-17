<?php

// error reporting

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require_once __DIR__ . "/../vendor/autoload.php";

// ---- App requires ----
use Model\Student;
use Data\StudentDAO;
use Config\DatabaseConfig;

$databaseConfig = new DatabaseConfig();
$studentDAO = new StudentDAO($databaseConfig);

// =============================================== TESTS ==============================================

# ----- Read -----

$students = $studentDAO->readAll();

echo "<h1>Read All</h1>";

foreach ($students as $student) {
    echo $student . '<hr>';
}


# ===== Create =====

// Change the arguments inside the student constructor to test adding new students

/*
    $newStudent = new Student("Jesse James", "P2210");
    $studentDAO->create($newStudent);
*/


# ===== Update =====

// Change the arguments inside the student constructor to test adding new students

// in this example of updating we create a whole new object, change the values that need to be updated, 
// and set the id ourselves so the old value is replaced in the database

/*
    $updatedStudent = new Student("Jesse West", "P2210");
    $updatedStudent->setStudentNo(3);

    $studentDAO->update($updatedStudent);
*/


# ===== Delete =====

// ensure that the id inserted as a parameter exists in database

/*
    $studentDAO->deleteById(4);
*/