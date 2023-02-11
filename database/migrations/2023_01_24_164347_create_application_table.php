<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('application', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned();
            $table->string('owner_name', 99)->nullable();
            $table->string('scheme_id', 99)->nullable();
            $table->string('application_number', 99)->nullable();
            $table->string('vehical_name', 99)->nullable();
            $table->string('registration_number', 99)->nullable();
            $table->string('chassis_number', 99)->nullable();
            $table->string('engine_number', 99)->nullable();
            $table->string('fuel_type', 99)->nullable();
            $table->string('model_name', 99)->nullable();
            $table->string('color', 99)->nullable();
            $table->enum('status', ['active', 'inactive','pending','approved','rejected'])->default('inactive');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('application');
    }
}
