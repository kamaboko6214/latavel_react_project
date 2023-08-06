<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = $request->validate([
            'name'=>'required|max:191',
            'email'=>'required|email|max:191|',
            'password'=>'required',
        ]);

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
        ]);

        return response()->json([
            'status'=>200,
            'username'=>$user->name
        ]);
    }
    
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

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(true);
    }
}