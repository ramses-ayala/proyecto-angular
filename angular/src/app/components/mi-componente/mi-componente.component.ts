import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public descripcion: string;
    public hobbies: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "ESTE ES EL TITULO DEL COMPONENTE";
        this.descripcion = "ESTE COMPONENTE ES EL PRIMERO QUE SE CREO";
        this.year = 2020;
        this.hobbies = "VIAJAR, ESCUCHAR MUSICA, ESTUDIAR, CODIFICAR, TECNOLOGIA";
        this.mostrarPeliculas = true;
        console.log("COMPONENTE CARGADO");
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }

}