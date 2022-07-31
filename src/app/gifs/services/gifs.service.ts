import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'EcwRhdXQ6uUOcchtBYDzucMfRnwd46Hy';
  private _historial: string[] = [];
  

  public resultados:Gif[] = [];


  get historial(){
    return [ ...this._historial ];
  }

  constructor( private http:HttpClient ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

    // if( localStorage.getItem('historial') ){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }

  }


  buscarGifs( query:string = '' ){

    query = query.trim().toLowerCase(); //siempre trabajamos en minusculas
    
    if( !this._historial.includes(query) ){ //si no esta inserto, sino no hago nada
      this._historial.unshift( query ); //ingreso un valor al comienzo
      this._historial = this._historial.splice(0,10) //siempre estoy cortando el array de 0 a 10

      localStorage.setItem('historial', JSON.stringify( this._historial ) );
    }

  
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=EcwRhdXQ6uUOcchtBYDzucMfRnwd46Hy&q=${ query }&limit=10`)
      .subscribe( ( resp ) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados ) );
      })
  }


}
