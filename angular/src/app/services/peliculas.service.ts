import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()

export class PeliculasService{

    private peliculas: Array<Pelicula>;

    constructor(){
        this.peliculas = [
            new Pelicula('RAPIDOS Y FURIOSO 4',2010,'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg'),
            new Pelicula('RAPIDOS Y FURIOSOS SIN CONTROL',2013,'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg'),
            new Pelicula('RAPIDOS Y FURIOSOS 6',2015,'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg'),
            new Pelicula('RAPIDOS Y FURIOSOS 7',2018,'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg')      
          ];
    }

    holaMundo(){
        return 'Hola desde el servicio de Angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}



// OBJETOS LITERALES
            /* {'title': 'RAPIDOS Y FURIOSO 4', 'image': 'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg','year': 2010},
            {'title': 'RAPIDOS Y FURIOSOS SIN CONTROL', 'image': 'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg','year': 2013},
            {'title': 'RAPIDOS Y FURIOSOS 6', 'image':'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg','year': 2015},
            {'title': 'RAPIDOS Y FURIOSOS 7','image': 'https://i.blogs.es/b36585/8a424638-e459-4fbb-b618-13757785bff9/450_1000.jpg','year': 2018} */