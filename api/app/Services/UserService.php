<?php

namespace App\Services;

use App\Models\User;
use App\Exceptions\UserHasBeenTakenException;

class UserService
{
    public function update(User $user, array $input)
    {
        if (!empty($input['email']) && User::where('email', $input['email'])->exists()) {
            throw new UserHasBeenTakenException();
        }

        if(!empty($input['password'])) {
            $input['password'] = bcrypt($input['password']);
        }

        $user->fill($input);
        $user->save();

        return $user->fresh();
    }
}
