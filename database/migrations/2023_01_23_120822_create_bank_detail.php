<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBankDetail extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned();
            $table->string('bank_name', 99)->nullable();
            $table->string('district_name', 99)->nullable();
            $table->string('ifsc_code', 199)->nullable();
            $table->string('branch_name', 99)->nullable();
            $table->string('account_number', 99)->nullable();
            $table->string('branch_address', 99)->nullable();
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
        Schema::dropIfExists('bank_details');
    }
}
