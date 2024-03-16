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

       

        Schema::create('data_table', function (Blueprint $table) {
            $table->increments('data_id');
            $table->string('data_name', 50)->nullable();
            $table->string('data_text', 1000)->nullable();
            $table->string('data_section', 50)->nullable();
            $table->timestamps();
        });

      
      

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

        
    }



    public function down(): void
    {
        Schema::dropIfExists('cart');
        Schema::dropIfExists('data_table');
        Schema::dropIfExists('fish');
        DB::statement('DROP DATABASE IF EXISTS sellfish');
    }
};
