



import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { global } from '../../services/global';
import swal  from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {


  private article: Article;
  private status: string;
 


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
    private _router: Router
  ) {

    this.article = new Article('', null, '', '', null);
    
    
  }

  ngOnInit() {
  }

  send() {
    //console.log("Articulo ha enviar: ", this.article);

    this._articleService.saveArticles(this.article).subscribe(

      response => {

        if(response) {
          this.status = 'sucess';

          swal(
            'Mensaje del sistema!!!!!!',
            'El articulo se ha creado correctamente !!!',
            'success'
          )

          this._router.navigate(['/blog']);
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
    this.article.imagen = nombre_imagen.image

  }
  
}

//console.log(nombre_imagen);