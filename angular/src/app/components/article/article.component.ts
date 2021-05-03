




import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { global } from '../../services/global';

import swal from 'sweetalert';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent implements OnInit {

  private datosArticle: Article;
  private id: number;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
      this.url = global.urlLocal;
   }

  ngOnInit() {

    this._route.params.subscribe((params: Params)=>{
      this.id = params.id;
    });

    //console.log("ESTE ES EL ID: ",this.id);
    this.getArticle(this.id);

  }

  getArticle(id){

    this._articleService.getArticle(id).subscribe(

      response => {

        if(response.articulo){
            this.datosArticle = response.articulo;
            
        }else{
          this._router.navigate(['/home']);
        }

      },

      error => {
        console.log(error);
      }

    )
  }

  delete(id){

    swal({
      title: "Mensaje del sistema",
      text: "Estas seguro de eliminar el articulo",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {

      if(willDelete){

        this._articleService.deleteArticle(id).subscribe(

          response => {
            if(response){
                this._router.navigate(['/blog']);
                //console.log("Respuesta general del BACKEND: ",response);
    
            }else{
              console.log("No llego la respuesta :'(");
            }
              //console.log("Se ha borrado el articulo :)");
          },
    
          error => {
              console.log("Ocurrio un error");
          }
    
        );


        swal("El articulo ha sido eliminado correctamente !!! :)", {
          icon: "success",
        });
      } else {
        swal("No se elimino porque usted decidio !!!");
      }
    });

    
  }

}
