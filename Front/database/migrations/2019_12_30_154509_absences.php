<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Absences extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('absences', function (Blueprint $table) {
            
            $table->increments('id');
            $table->string('id_etudiant',20);
            $table->string('jour',10);
            $table->time('heureDebut');
            $table->time('heureFin');
            $table->string('module',20);           
            $table->string('justifie',20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('absences');
    }
}
