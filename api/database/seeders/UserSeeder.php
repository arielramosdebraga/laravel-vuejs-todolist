<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            'first_name' => 'Ariel',
            'last_name' => 'Ramos de Braga',
            'email' => 'ariel@arielramosdebraga.com.br',
            'password' => bcrypt('Password1')
        ]);
        User::factory(9)->create();
    }
}
