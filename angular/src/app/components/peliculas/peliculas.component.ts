import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService]
})
export class PeliculasComponent implements OnInit {

  public titulo: string;
  public array_peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  
  
  public array_favoritas: Array<Pelicula>;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculasService        
  ) { 
    // SOLO INICIALIZAR ATRIBUTOS
    this.titulo = "COMPONENTE PELICULAS";
    
    this.array_peliculas = _peliculaService.getPeliculas();

    this.fecha = new Date();
    /* TAMBIEN SE LE PUEDE PASAR POR PARAMETRO A LA
    FUNCION Date en formato año mes dia */
  }

  ngOnInit() {
    console.log("EVENTO ON INIT CARGADO");
    console.log(this.array_peliculas);  // MUESTRA EL ARREGLO DESDE EL SERVICIO
    console.log(this._peliculaService.holaMundo());
    console.log('ARREGLO DESDE SERVICIO: ',this.array_peliculas);
  }

  ngDoCheck(){
    console.log("docheck lanzado");
  }

  cambiarTitulo(){
    this.titulo = "EL TITULO HA SIDO CAMBIADO";
  }

  ngOnDestroy(){
    console.log("SE VA A ELIMINAR EL COMPONENTE");
  }

  mostrarFavorita(event){
    console.log(" mostrar favorita:",event); 
    
      this.favorita = event.pelicula; 
    

    
  }
    
}

/* this.favorita = event.peli;
console.log(this.favorita); */