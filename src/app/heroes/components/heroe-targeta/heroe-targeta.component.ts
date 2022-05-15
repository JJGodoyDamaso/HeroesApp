import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px;
    }
    `
    ]
})

export class HeroeTargetaComponent implements OnInit {

  @Input() heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
