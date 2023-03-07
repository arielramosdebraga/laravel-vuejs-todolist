<?php

namespace App\Exceptions;

use Exception;

class ForgotPasswordEmailInvalidException extends Exception
{
    protected $message = 'Email invalid, try other email.';

    public function render()
    {
        return response()->json([
            'error' => class_basename($this),
            'message' => $this->getMessage(),
        ], 401);
    }
}
