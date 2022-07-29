import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial(){
    return [ ...this._historial ];
  }

  buscarGifs( query:string = '' ){

    query = query.trim().toLowerCase(); //siempre trabajamos en minusculas
    
    if( !this._historial.includes(query) ){ //si no esta inserto, sino no hago nada
      this._historial.unshift( query ); //ingreso un valor al comienzo
      this._historial = this._historial.splice(0,10) //siempre estoy cortando el array de 0 a 10
    }


    console.log(this._historial)

  }


}
