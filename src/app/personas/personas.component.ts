import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from './../persona.model';
import { PersonasService } from './../personas.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonasService , private router:Router) {}

  personaAgregada(persona: Persona) {
    this.personaService.agregarPersona(persona);
  }

  public ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  agregar() {
    this.router.navigate(["personas/agregar"]);
  }
}
