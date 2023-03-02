<?php 
/* Settings for container */

return function($container) {
    $container->set('settings', function() {
        return [
        'displayErrorDetails' => true,
        'logErrorDetails' => true,
        'logErrors' => true,
        'db' => [
            'host' => 'localhost',
            'dbname' => 'storyful_db',
            'user' => 'root',
            'password' => '',
            'charset' => 'utf8mb4'
        ],
    ];
    });

    $container->set('db', function ($container) {
        $settings = $container->get('settings')['db'];
    
        $host = $settings['host'];
        $dbname = $settings['dbname'];
        $user = $settings['user'];
        $password = $settings['password'];
        $charset = $settings['charset'];
    
        $dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";
    
        $db = new \PDO($dsn, $user, $password);
    
        return $db;
    });
}

?>
