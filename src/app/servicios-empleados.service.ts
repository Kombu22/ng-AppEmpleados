import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpleadosService {

  constructor() { }

  muestraMensaje(mensaje:string){
    
    alert(mensaje);
    
  }

}
