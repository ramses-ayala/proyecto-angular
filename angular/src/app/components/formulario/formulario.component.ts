import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() { 

    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    };

  }

  ngOnInit() {
  }

  onSubmit(){
    alert("FUNCIONA EL EVENTO");
    console.log(this.user);
  }

  click(){
    alert('has dado click');
  }

  hasSalido(){
    alert('has salido y el valor es: ' +this.campo );
  }

  enter(){
    alert('has soltado una tecla');
  }

}
