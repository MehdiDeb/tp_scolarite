<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Seances extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seances', function (Blueprint $table) {

            $table->increments('id');
            $table->string('jour',10);
            $table->time('heureDebut');
            $table->time('heureFin');
            $table->string('enseignant',20);
            $table->string('salle',20);
            $table->string('module',20);
            $table->string('groupe',20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('seances');
    }
}
