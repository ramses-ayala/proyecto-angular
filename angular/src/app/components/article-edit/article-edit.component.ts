


import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { global } from '../../services/global';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {


  private datosArticle: Article;
  private status: string;
  private is_edit: boolean;
  private url: string;
  


  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg, .png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: global.urlLocal + 'upload-image'
      /*headers: {
        "Content-Type": "text/plain;charset=UTF-8",
        "Authorization": `Bearer ${token}`
      }*/
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,

    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Subir imagen !!!',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.datosArticle = new Article('', null, '', '', null);
    this.is_edit = true;
    this.url = global.urlLocal;
  }

  ngOnInit() {

    this.getArticle();
  }

  update() {
    console.log("Articulo ha enviar: ", this.datosArticle);

    this._articleService.updateArticle(this.datosArticle._id,this.datosArticle).subscribe(

      response => {

        if(response) {
          this.status = 'sucess';
          console.log("RESPUESTA DEL BACKEND: ", response);

        }else {
          this.status = 'error';
          console.log("LA RESPUESTA NO LLEGO");
        }

      },

      error => {
        this.status = 'error';
        console.log(error);
      }
    );
    //console.log(this.article);
  }

  ImageUpload(data){
    //console.log(data);
    let nombre_imagen = JSON.parse(data.response);
    this.datosArticle.imagen = nombre_imagen.image

  }

  getArticle(){

    this._route.params.subscribe((params: Params)=>{

      let id = params.id;

        this._articleService.getArticle(id).subscribe(
    
          response => {
    
            if(response.articulo){
                this.datosArticle = response.articulo;
                console.log("DATOS DEL BACKEND: ", this.datosArticle);
                
            }else{
              this._router.navigate(['/home']);
            }
    
          },
    
          error => {
            console.log(error);
          }
    
        )
    });


  }

}
