import { EventEmitter, Injectable } from '@angular/core';
import { DataServices } from './data.services';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()
export class PersonasService {
  constructor(
    private logginService: LoggingService,
    private dataServices: DataServices
  ) {}

  saludar = new EventEmitter<number>();
  personas: Persona[] = [];

  obtenerPersonas() {
    return this.dataServices.getPersonas();
  }

  setPersonas(personas: Persona[]) {
    this.personas = personas;
  }

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeAConsola(
      'Agregamos persona' + persona.nombre
    );
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  modificarPersona(indice: number, persona: Persona) {
    let persona1 = this.personas[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataServices.modificarPersona(indice, persona);
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.eliminarPersona(index);
    //se vuelve a guardar el arreglo
    this.modificarPersonas();
  }

  modificarPersonas() {
    if (this.personas != null) {
      this.dataServices.guardarPersonas(this.personas);
    }
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }
}
