<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('news')->insert([
            'title' => fake()->title(),
            'description' => fake()->paragraph(2, true),
            'category' => fake()->sentence(),
            'author' => fake()->name(),
        ]);
    }
}