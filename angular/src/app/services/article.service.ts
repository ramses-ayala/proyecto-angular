


/* PARA PODER UTILIZAR EL SERVICIO EN OTROS ARCHIVOS */
import { Injectable } from '@angular/core';



/*  HttpClient -> libreria para hacer peticiones ajax al backend
    HttpHeaders -> para poder manipular las peticiones ajax y enviar datos
*/
import { HttpClient, HttpHeaders } from '@angular/common/http';


/*
Observable
son para capturar los datos que devuelve el backend (API) 
*/
import { Observable } from 'rxjs';


import { Article } from '../models/article';
import { global } from './global';


@Injectable()

export class ArticleService{

    private url: string;
    

    constructor(
        private _http: HttpClient
    ){
        this.url = global.urlLocal;
        
    }

    pruebas(){
        return "Este es el metodo pruebas del servicio de articulo";
    }

    saveArticles(article: Article): Observable<any>{
        
        // CONVERTIR UN OBJETO JSON LITERAL A UN JSON-STRING
        let articulo = JSON.stringify(article);

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save', articulo, {headers: headers});
    }

    getArticles(last: any = null): Observable<any>{

        let articles = "articles";

        if(last != null){
            articles = "articles/true";
        }
        
        return this._http.get(this.url + articles);  
    
    }

    getArticle(id): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'article/' +id, {headers: headers});

    }

    searchArticle(stringArticle): Observable<any>{
        //let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'search/'+stringArticle);
        
    }

    updateArticle(id, article): Observable<any>{
        
        let articulo = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'update/' + id, articulo, {headers: headers});

    }

    deleteArticle(id): Observable<any>{

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'delete/' + id, {headers: headers});
    }
}

//let headers = new HttpHeaders().set('Content-Type', 'application/json');

