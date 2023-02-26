<?php

namespace App\Authenticate;

use Psr\Container\ContainerInterface;

class Authenticate
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Authenticates user
     * @param string $email email used to authenticate
     * @param string $password password used to authenticate
     */
    function authenticateUser(string $email, string $password): bool
    {
        $db = $this->container->get('db');

        $statement = $db->prepare("SELECT * FROM users WHERE email = ?");
        $statement->execute([$email]);
        $rows = $statement->fetchAll(\PDO::FETCH_ASSOC);
        if (count($rows) > 0) {
            $hashed_password = $rows[0]['password'];
            $verify_password = password_verify($password, $hashed_password);
            return $verify_password;
        } else {
            return false; // no data was found
        }
    }
}
