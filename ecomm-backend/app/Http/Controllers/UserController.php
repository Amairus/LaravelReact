<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function register(Request $req)
    {
        $user = new User();
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

    function login(Request $req)
    {
        $creditentials = $req->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);

        if(Auth::attempt($creditentials)){
            $user = User::where('email', $req->email)->first();
            return $user;
        }
        else{
            return response(json_encode(['error'=> 'Email or password is not matched!']), 401);
        }
    }
}
