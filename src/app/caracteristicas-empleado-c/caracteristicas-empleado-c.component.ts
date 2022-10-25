import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})

export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio:ServiciosEmpleadosService, private servicioVentanaEmergente:ServiciosEmpleadosService) {
    
  }

  ngOnInit(): void {
  }


  agregarCaracteristicas(value: string) {
    // this.miServicio.muestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
