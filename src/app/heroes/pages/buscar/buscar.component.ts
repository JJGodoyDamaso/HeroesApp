import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string = "";
  heroes: Heroe[] = [];

  heroeSeleccionado!: Heroe | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscar():void {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(heroes => this.heroes=heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    if(!heroe){
      this.heroeSeleccionado = undefined;
      return;
    }
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!).subscribe( heroe => {
      this.heroeSeleccionado = heroe;
    })

  }

}
