<?php

declare(strict_types=1);

namespace Src\Domain\User;

use JsonSerializable;

class User implements JsonSerializable
{
    private ?int $id;
    private string $username;
    private string $email;
    private string $password;
    private string $avatar;

    public function __construct(?int $id, string $username, string $email, string $password, string $avatar)
    {
        $this->id = $id;
        $this->username = strtolower($username);
        $this->email = $email;
        $this->password = $password;
        $this->avatar = $avatar;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): string
    {
        return $this->username;
    }

    public function getAvatar(): string
    {
        return $this->avatar;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    #[\ReturnTypeWillChange]
    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id == null ? createUniqueID() : $this->id,
            'username' => $this->username,
            'email' => $this->email,
            'password' => hashPassword($this->password),
            'avatar' => $this->avatar
        ];
    }
}
