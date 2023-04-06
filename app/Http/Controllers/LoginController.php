<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            "email" => ["required", "email"],
            "password" => ["required"],
          ]); 
        $result = false;
        $status = 401;
        $message = 'ユーザが見つかりません';
        $user = null;
        if (Auth::attempt($credentials)) {
            // Success
            $result = true;
            $status = 200;
            $message = 'OK';
            $user = Auth::user();
        }
        return response()->json(['result' => $result, 'status' => $status, 'user' => $user, 'message' => $message]);
    }
}