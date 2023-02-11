<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;


use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('districts')->insert([
            'name' => 'gkp',
            'status' => 'active',
        ]);
    }
}
