<?php

/**
 * Descritption: Model Class for Student objects
 * Author: justin@codespace.co.za
 */

namespace Model;

class Student implements \JsonSerializable {

    // =================================== Fields =================================== //

    private $studentNo;
    private $name;
    private $class;

    // =================================== Constructor =================================== //

    public function __construct($name, $class) {
        
        $this->name = $name;
        $this->class = $class;

    }  
    
    // =================================== Methods =================================== //

    // toString method
    public function __toString() {
        return "studentNo: " . $this->studentNo . " - name: " . $this->name . " - class: " . $this->class;
    }

    // converts stdObject to Model class Object
    public static function createStudentFromDb($Object) {

        $student = new Student($Object->name, $Object->class);
        $student->setStudentNo($Object->student_no);
        return $student;

    }

    // allows objects of this class to be serialized into json
    public function jsonSerialize() {
        return [
            "studentNo" => $this->studentNo,
            "name" => $this->name,
            "class" => $this->class
        ];
    }

    // =================================== Getters and Setters =================================== //

    /**
     * Get the value of studentNo
     */ 
    public function getStudentNo()
    {
        return $this->studentNo;
    }

    /**
     * Set the value of studentNo
     *
     * @return  self
     */ 
    public function setStudentNo($studentNo)
    {
        $this->studentNo = $studentNo;

        return $this;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of class
     */ 
    public function getClass()
    {
        return $this->class;
    }

    /**
     * Set the value of class
     *
     * @return  self
     */ 
    public function setClass($class)
    {
        $this->class = $class;

        return $this;
    }
}