<?php

// * Global helper functions * //

declare(strict_types=1);

if (!function_exists('hashPassword')) {
    function hashPassword(string $password): string
    {
        return password_hash($password, PASSWORD_BCRYPT);
    }
}

if (!function_exists('createUniqueID')) {
    /**
     * Creates a unique ID
     */
    function createUniqueID(): string
    {
        return uniqid("", true);
    }
}
