

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { global } from '../../services/global';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})

export class BlogComponent implements OnInit {

  public titulo: string;
  public arregloArticles: Array<Article>; 
  private url: string;

  constructor(
    private _articleService: ArticleService
  ) { 
    this.titulo = "ULTIMOS ARTICULOS (este titulo viene de la clase del componente blog)";
    this.url = global.urlLocal;
  }

  ngOnInit() {
      
      this._articleService.getArticles().subscribe(
        /* response tiene dos propiedades status y articles */
         response => {
           //console.log("RESPUESTA GENERAL --> ",response);
            //console.log("ARREGLO ---> ",response.lista);        
            
          if(response.lista){
            this.arregloArticles = response.lista;
            //console.log("ARREGLO OBJETOS : ", this.arregloArticles);
          } 
          /* console.log("STATUS: ",response.status);
          console.log("ESTE ES EL ARREGLO ---> : ", this.arregloArticles); */
        },

        error => {
          console.log(error);
        }

      )      
  }
}
