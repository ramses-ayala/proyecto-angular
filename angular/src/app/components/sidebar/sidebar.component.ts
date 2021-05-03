

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private dato: string;

  //@Output() datoBuscar = new EventEmitter();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ){}

  ngOnInit() {   
  }

  search(){
    console.log("ESTE ES EL DATO: " + this.dato);
    this._router.navigate(['/buscar', this.dato]);

    //alert(this.dato);
    //alert(typeof this.dato);

  }
 

 /*  onSubmit(){

    if(this.datos.data.length > 0){
      alert("EL DATO AGREGADO ES: " + this.datos.data);
    }

  } */

}
