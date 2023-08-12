<?php

namespace App\Http\Middleware;

use Closure;

class SetServerUrl
{
    public function handle($request, Closure $next)
    {
        // Définir l'URL de base avec le nom du serveur souhaité
        config(['app.url' => 'https://localhost']);

        return $next($request);
    }
}

