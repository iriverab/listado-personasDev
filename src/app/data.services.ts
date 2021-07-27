import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

  //guardar Persona
  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listado-personas-1eb0a-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe(
        (response) =>
          console.log(response),
        (error) => console.log('Error al guardar persona')
      );
  }
}
