import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadoDeLista:Empleado;

  @Input() indice:number;

  constructor(private miServicio:ServiciosEmpleadosService) { }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.miServicio.muestraMensaje("Nueva caracteristica agregada: " + nuevaCaracteristica);
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }





 

  ngOnInit(): void {
  }

}
