<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
 
    public function up(): void
    {
        DB::statement('CREATE DATABASE IF NOT EXISTS sellfish');
        DB::statement('USE sellfish');


        Schema::create('cart', function (Blueprint $table) {
            $table->increments('cart_id');
            $table->string('user_id', 500)->nullable();
            $table->string('fish_code', 500)->nullable();
            $table->integer('price')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('total')->nullable();
            $table->string('purchase_code', 500)->nullable();
            $table->integer('stat')->nullable();
            $table->dateTime('purchase_date')->nullable();
            $table->timestamps();
        });

        DB::table('cart')->insert([
            ['user_id' => '5', 'fish_code' => 'CD2024Mar06120336FGE80USDL69', 'price' => 677, 'quantity' => 4, 'total' => 677, 'purchase_code' => 'CD2024Mar12130358UHA3T5172ZC', 'stat' => 0, 'purchase_date' => '2024-03-12 13:58:51'],
            ['user_id' => '5', 'fish_code' => 'CD2024Mar06120336FGE80USDL69', 'price' => 677, 'quantity' => 4, 'total' => 677, 'purchase_code' => 'CD2024Mar12140303F9N3I1R0YPC', 'stat' => 0, 'purchase_date' => '2024-03-12 14:03:44'],
        ]);

        Schema::create('data_table', function (Blueprint $table) {
            $table->increments('data_id');
            $table->string('data_name', 50)->nullable();
            $table->string('data_text', 1000)->nullable();
            $table->string('data_section', 50)->nullable();
            $table->timestamps();
        });

      
        DB::table('data_table')->insert([
            ['data_name' => 'title', 'data_text' => '$ell Fish', 'data_section' => 'all'],
            ['data_name' => 'phone', 'data_text' => '09182772', 'data_section' => 'all'],
            ['data_name' => 'address', 'data_text' => 'Himamaylan negros occidental', 'data_section' => 'all'],
            ['data_name' => 'email', 'data_text' => 'tyronemalocon@gmail.com', 'data_section' => 'all']
        ]);

        Schema::create('fish', function (Blueprint $table) {
            $table->increments('fish_id');
            $table->string('fish_code', 200)->nullable();
            $table->string('fish_name', 1000)->nullable();
            $table->string('fish_color', 1000)->nullable();
            $table->integer('price')->nullable();
            $table->string('quantity', 50)->nullable();
            $table->string('description', 1000)->nullable();
            $table->dateTime('date_added')->nullable();
            $table->integer('stat')->nullable();
            $table->string('fish_image', 500)->nullable();
            $table->timestamps();
        });

        DB::table('fish')->insert([
            ['fish_code' => 'CD2024Mar05010334ANCRI7G48UL', 'fish_name' => 'test fish', 'fish_color' => 'blue red yellow', 'price' => 500, 'quantity' => '16', 'description' => 'desc', 'date_added' => '2024-03-05 01:34:25'],
            ['fish_code' => 'CD2024Mar05130354RGOILP8MCND', 'fish_name' => 'Fish2', 'fish_color' => 'blue yellow orange', 'price' => 600, 'quantity' => '19', 'description' => 'big', 'date_added' => '2024-03-05 13:54:58'],
            ['fish_code' => 'CD2024Mar051303585Z6OST2YCMH', 'fish_name' => 'Long nose', 'fish_color' => 'gray', 'price' => 300, 'quantity' => '29', 'description' => 'desc', 'date_added' => '2024-03-05 13:58:28'],
            ['fish_code' => 'CD2024Mar05140300KS02CYHON8M', 'fish_name' => 'cute fiesh', 'fish_color' => 'orange', 'price' => 80, 'quantity' => '21', 'description' => 'this is a sample description 4 this is a sample description 4 this is a sample description 4 this is a sample description 4 this is a sample description 4 this is a sample description 4 this is a sample description 4', 'date_added' => '2024-03-05 14:00:20'],
            ['fish_code' => 'CD2024Mar06010313M8FU7SN9GRO', 'fish_name' => 'Brown fish', 'fish_color' => 'brown', 'price' => 3000, 'quantity' => '4', 'description' => 'this is a sample brown fish', 'date_added' => '2024-03-06 01:13:50'],
            ['fish_code' => 'CD2024Mar06120336FGE80USDL69', 'fish_name' => 'Fish u', 'fish_color' => 'blue yellow orange', 'price' => 677, 'quantity' => '20', 'description' => 'dea', 'date_added' => '2024-03-06 12:36:28'],
        ]);
    }



    public function down(): void
    {
        Schema::dropIfExists('cart');
        Schema::dropIfExists('data_table');
        Schema::dropIfExists('fish');
        DB::statement('DROP DATABASE IF EXISTS sellfish');
    }
};
