import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[

    new Empleado("Mateo","Bravo","Presidente",7500),
    new Empleado("Valentina","Martinez","Directora",5500),
    new Empleado("Ana","Fdez","Administrativa",3500),
    new Empleado("Jose","Lopez","Administrativo",2500),


  ];

agregarEmpleado(){

  let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  this.empleados.push(miEmpleado);
}

 

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
