import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'EcwRhdXQ6uUOcchtBYDzucMfRnwd46Hy';
  private _historial: string[] = [];

  get historial(){
    return [ ...this._historial ];
  }

  constructor( private http:HttpClient ) {}


  buscarGifs( query:string = '' ){

    query = query.trim().toLowerCase(); //siempre trabajamos en minusculas
    
    if( !this._historial.includes(query) ){ //si no esta inserto, sino no hago nada
      this._historial.unshift( query ); //ingreso un valor al comienzo
      this._historial = this._historial.splice(0,10) //siempre estoy cortando el array de 0 a 10
    }

  
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=EcwRhdXQ6uUOcchtBYDzucMfRnwd46Hy&q=dragon ball z&limit=10`)
      .subscribe( (resp:any) => {
        console.log( resp.data )
      })
  }


}
