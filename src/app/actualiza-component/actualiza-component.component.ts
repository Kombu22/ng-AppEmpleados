import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServiciosEmpleadosService } from '../servicios-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServiciosEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[];
  accion:number;

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;

    this.indice=this.route.snapshot.params['id'];

    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  volverHome(){
    this.router.navigate(['']);
  
    }
  
    // actualizaEmpleado(){
    
    //   let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //   // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
    //   this.empleadosService.actualizarEmpleado(this.indice, miEmpleado); 
    //   this.router.navigate(['']);
    // }

    // eliminaEmpleado(){

    //   this.empleadosService.eliminarEmpleado(this.indice); 

    //   this.router.navigate(['']);

    // }

    accionEmpleado(){

      if(this.accion===1){
      let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      // this.miServicio.muestraMensaje("Nombre del empleado: " + miEmpleado.nombre);
      this.empleadosService.actualizarEmpleado(this.indice, miEmpleado); 
      this.router.navigate(['']);   
      }

      if(this.accion===2){
      this.empleadosService.eliminarEmpleado(this.indice); 
      this.router.navigate(['']); 
       
    }
    }
    
     
    
      cuadroNombre:string="";
      cuadroApellido:string="";
      cuadroCargo:string="";
      cuadroSalario:number=0;

      indice:number;

}
