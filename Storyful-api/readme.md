# Slim App Template

## About:

Part of this project will be built out in the pre-recorded lectures folder on Google Drive and the rest will have to be researched by reading through the Slim documentation. The Request and Response sections of the documentation will of the most help

It is also reccomended that students use this template for their Fullstack Online Store projects since it already has Composer and Slim installed, it has namespaces configured for all of its classes, and it also code which allows CORS and the five coreHTTP methods to be used via its endpoints.


## Installation and Configuration:

1. The first step to getting this template running would be to import the students_slim.sql file inside the src/config directory inside your MySQL database as this project runs off MySQL. PHPMyAdmin and MySqlWorkbench should have a built-in function to import a database, but the sql can be copied over and ran manually as well.

2. Change the database port number inside the DatabaseConfig.php classs to whatever port your database is running on (default is 3306).

3. After this the tests.php file should be runnable and you may play around with the code in that file or writing out your endpoints in the index.php file.


## Using as Template for Booking App:

1. If you are using this project as a template for your Online Store you will need to create a new database and to change the values of the fields inside the DatabaseConfig.php class so that the application is able to connect to the correct database.

2. You will need to create the correct model classes for all of your Products, Users, Cart, etc.

3. Create new DAO classes for all your entities, create new database tables for your DAO classes to connect to, and finally write out all the CRUD operations as well as any other SQL queries you need to complete your application inside your DAO classes.


## Working with Composer:

Whenever you register a new namespace inside the composer.json fiel remember to open a terminal inside the root directory and run ' composer dump-autoload ' so that composer can add that directory to the autoload file and can autoload your classes for you.