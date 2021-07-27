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
  personas: Persona[] = [
    new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),
    new Persona('karla', 'Lara'),
  ];

  agregarPersona(persona: Persona) {
    this.logginService.enviaMensajeAConsola(
      'Agregamos persona' + persona.nombre
    );
    this.personas.push(persona);
    this.dataServices.guardarPersonas(this.personas);
  }

  modificarPersona(indice: number, persona: Persona) {
    let persona1 = this.personas[indice];
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
  }

  encontrarPersona(index: number) {
    let persona: Persona = this.personas[index];
    return persona;
  }
}
