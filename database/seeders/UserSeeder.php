<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'id' => 1,
            'name' => '山田たろう',
            'email' => 'yamada@co.jp',
            'email_verified_at' => '20230315',
            'password' => 'password',
            'remember_token' => '',
            'created_at' => '20230315',
            'updated_at' => '20230315'

        ]);
    }
}
