


import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {

  private arregloArticles: Array<Article>;

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit() {

    this._articleService.getArticles(true).subscribe(
      /* response tiene dos propiedades status y articles */
       response => {
          
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
