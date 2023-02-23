namespace App\Http\Controllers;
use Psr\Container\ContainerInterface;
use Psr\http\Message\ResponseInterface as Response;
use Psr\http\Message\RequestInterface as Request;
class UserController
{
    private $container;
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }
}
