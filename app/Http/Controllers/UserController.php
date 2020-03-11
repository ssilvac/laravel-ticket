<?php

namespace App\Http\Controllers;

use App\User;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * retorna la lista de usuarios
     * @return mixed
     */
    public function getAllUsers()
    {
        $users =  User::where('user_profile_id', 2)->get();
        return response()->json($users);
    }
}
