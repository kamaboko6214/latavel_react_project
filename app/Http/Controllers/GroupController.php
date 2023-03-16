<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Groupcontroller extends Controller
{
    public function index() {
        
        return view('group.index');
    }

    public function show() {
        return view('group.show');
    }
}
