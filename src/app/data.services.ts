import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './login/authenticationService.service';
import { Persona } from './persona.model';
@Injectable()
export class DataServices {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService
  ) {}
  Token = this.authService.getIdToken();
  getPersonas() {
    return this.httpClient.get(
      'https://listado-personas-1eb0a-default-rtdb.firebaseio.com/datos.json?auth=' +
        this.Token
    );
  }

  //guardar Persona
  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listado-personas-1eb0a-default-rtdb.firebaseio.com/datos.json?auth=' +
          this.Token,
        personas
      )
      .subscribe(
        (response) => console.log(response),
        (error) => console.log('Error al guardar persona')
      );
  }

  modificarPersona(index: number, persona: Persona) {
    let url: string;
    url =
      'https://listado-personas-1eb0a-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth=' +  this.Token;
    this.httpClient.put(url, persona).subscribe(
      (response) => console.log('Resultado de modificar ok'),
      (error) => console.log('Error')
    );
  }

  eliminarPersona(index: number) {
    let url: string;
    url =
      'https://listado-personas-1eb0a-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json?auth=' +
      this.Token;
    this.httpClient.delete(url).subscribe(
      (response) => console.log('Resultado de Elminar ok'),
      (error) => console.log('Error')
    );
  }
}
