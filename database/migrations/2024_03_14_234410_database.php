<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
 
    public function up()
    {
        Schema::create('cart', function (Blueprint $table) {
            $table->increments('cart_id');
            $table->string('user_id')->nullable();
            $table->string('fish_code')->nullable();
            $table->integer('price')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('total')->nullable();
            $table->string('purchase_code')->nullable();
            $table->integer('stat')->nullable();
            $table->datetime('purchase_date')->nullable();
            $table->timestamps();
        });

        Schema::create('data_table', function (Blueprint $table) {
            $table->increments('data_id');
            $table->string('data_name')->nullable();
            $table->string('data_text')->nullable();
            $table->string('data_section')->nullable();
            $table->timestamps();
        });

        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('uuid');
            $table->text('connection');
            $table->text('queue');
            $table->longText('payload');
            $table->longText('exception');
            $table->timestamp('failed_at')->useCurrent();
        });

        Schema::create('fish', function (Blueprint $table) {
            $table->increments('fish_id');
            $table->string('fish_code')->nullable();
            $table->string('fish_name')->nullable();
            $table->string('fish_color')->nullable();
            $table->integer('price')->nullable();
            $table->string('quantity')->nullable();
            $table->string('description')->nullable();
            $table->datetime('date_added')->nullable();
            $table->integer('stat')->nullable();
            $table->string('fish_image')->nullable();
            $table->timestamps();
            $table->integer('shop_id')->nullable();
        });

        

     

        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('shopname');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('username');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('user_table', function (Blueprint $table) {
            $table->integer('user_id')->nullable();
            $table->integer('user_name')->nullable();
        });
    }


    public function down()
    {
        Schema::dropIfExists('cart');
        Schema::dropIfExists('data_table');
        Schema::dropIfExists('failed_jobs');
        Schema::dropIfExists('fish');
        Schema::dropIfExists('migrations');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('personal_access_tokens');
        Schema::dropIfExists('users');
        Schema::dropIfExists('user_table');
    }
};
