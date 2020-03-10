<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Administrador',
            'email' => 'admin@laravel-ticket.cl',
            'password' => bcrypt('admin'),
            'user_profile_id' => 1
        ]);

        DB::table('users')->insert([
            'name' => 'Usuario',
            'email' => 'user@laravel-ticket.cl',
            'password' => bcrypt('user'),
            'user_profile_id' => 2
        ]);

        factory(App\User::class, 3)->create();
    }
}
