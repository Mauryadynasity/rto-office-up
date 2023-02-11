<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 99);
            $table->string('mobile', 99)->nullable();
            $table->boolean('is_mobile_verified')->default(0);            
            $table->string('email', 199)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('vehicle_number', 199)->nullable();
            $table->string('chassis_number', 199)->nullable();
            $table->string('password', 199)->nullable();
            $table->string('father_name', 99)->nullable();
            $table->string('mother_name', 99)->nullable();
            $table->date('date_of_birth')->nullable();
            $table->string('applicant_type', 99)->nullable();
            $table->string('district', 99)->nullable();
            $table->string('block', 99)->nullable();
            $table->string('grampanchayat', 99)->nullable();
            $table->string('tehsil', 99)->nullable();
            $table->string('pargana', 99)->nullable();
            $table->string('ward', 99)->nullable();
            $table->string('address', 199)->nullable();
            $table->string('pin_code', 199)->nullable();
            $table->string('city', 199)->nullable();
            $table->string('state', 199)->nullable();
            $table->string('country', 199)->nullable();
            $table->string('religion', 199)->nullable();
            $table->enum('gender', ['male', 'female', 'other'])->default('male');
            $table->enum('category', ['OBC', 'General', 'SCST', 'EWS'])->default('OBC');
            $table->enum('marital_status', ['married', 'unmarried'])->default('unmarried');
            $table->string('blood_group')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('inactive');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
