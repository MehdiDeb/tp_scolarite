<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AbsenceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'id_etudiant' => $this->id_etudiant,
            'jour' => $this->jour,
            'heureDebut' => $this->heureDebut,
            'heureFin' => $this->heureFin,
            'enseignant' => $this->enseignant,
            'module' => $this->module,
            'justifie' => $this->justifie,
        ];
    }
}
