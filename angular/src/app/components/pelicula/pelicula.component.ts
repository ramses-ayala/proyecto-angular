import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {


  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleccionar(pelicula){  
    /* console.log(event); */
    console.log("PELICULA ES:", pelicula);
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });

  }

}

/*
  el método seleccionar va a emitir un evento en este caso se le llamo 
  MarcarFavorita este evento pasa los datos mediante un atributo de clase 
  OutPut, al componente padre (peliculas) 
*/
