<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserProfilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_profiles')->insert([
            'id' => 1,
            'name' => 'Admin',
        ]);

        DB::table('user_profiles')->insert([
            'id' => 2,
            'name' => 'User',
        ]);
    }
}
