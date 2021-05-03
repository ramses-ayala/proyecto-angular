



import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})

export class SearchComponent implements OnInit {

  private param: string;
  private articlesArr: Array<Article>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      
      this.param = params.search;
      
    }); 
    
    console.log("ESTE ES EL PARAMETRO -> ",this.param);
    //console.log(typeof this.param);
    this.searchArticle(this.param);

  }

  searchArticle(article){

    this._articleService.searchArticle(article).subscribe(

      response => {

        if(response.articles){
          this.articlesArr = response.articles;
          //console.log("RESPUESTA DEL BACKEND GENERAL: ",response);
          //console.log("RESPUESTA ESPECIFICA: ", this.articles); 
        }
        else{
          this.articlesArr = [];
        }

      },

      error => {
        console.log(error);
        //this._router.navigate(['/home']);
      }

    );
  }

}
