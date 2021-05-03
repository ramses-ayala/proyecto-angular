import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{

    transform(value: any){
        let estado: string = " y no es par";

        if(value % 2 == 0){
            estado = " y es par";
            
        }
        return "LA FECHA CON LA PIPE PERSONALIZADA ES: " +value + estado;
    }
}