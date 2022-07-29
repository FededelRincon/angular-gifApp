import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private cualquierNombre: GifsService ){}

  
  buscar() {
    const valor = this.txtBuscar.nativeElement.value

    if(valor.trim().length === 0) { return };

    // this.GifsService.buscarGifs( valor );
    this.cualquierNombre.buscarGifs( valor )

    this.txtBuscar.nativeElement.value = '';
  }

}
