<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin', function (Blueprint $table) {
            $table->id();
            $table->string('name', 99)->nullable();
            $table->string('user_name', 99)->nullable();
            $table->string('password', 99)->nullable();
            $table->string('has_password', 99)->nullable();
            $table->string('email', 99)->nullable();
            $table->string('role', 99)->nullable();
            $table->string('is_email_verified', 99)->nullable();
            $table->string('mobile', 99)->nullable();
            $table->string('is_mobile_verified', 99)->nullable();
            $table->string('two_step_verification', 99)->nullable();
            $table->string('remember_token', 99)->nullable();
            $table->string('date_of_birth', 99)->nullable();
            $table->string('gender', 99)->nullable();
            $table->string('admin_type', 99)->nullable();
            $table->string('district_id', 99)->nullable();
            $table->enum('status', ['active', 'inactive'])->default('inactive');
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
        Schema::dropIfExists('admin');
    }
}
