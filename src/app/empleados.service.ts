import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServiciosEmpleadosService } from "./servicios-empleados.service";



@Injectable()
export class EmpleadosService {

    constructor(private servicioVentanaEmergente:ServiciosEmpleadosService, private dataService:DataServices){}

    setEmpleados(misEmpleados:Empleado[]){
      this.empleados = misEmpleados;
    }


    obtenerEmpleados(){
      return this.dataService.cargarEmpleados();
    }

    empleados:Empleado[]=[];

    // empleados:Empleado[]=[

    //     new Empleado("Mateo","Bravo","Presidente",7500),
    //     new Empleado("Valentina","Martinez","Directora",5500),
    //     new Empleado("Ana","Fdez","Administrativa",3500),
    //     new Empleado("Jose","Lopez","Administrativo",2500),
  
    // ];


    

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" +empleado.nombre + "\n" + "Salario: " + empleado.salario);
    this.empleados.push(empleado);

    this.dataService.guardarEmpleados(this.empleados); 
  }

  encontrarEmpleado(indice:number){

    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }


  actualizarEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado = this.empleados[indice];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;

    this.dataService.actualizarEmpleado(indice,empleado);
    
  }

  eliminarEmpleado(indice:number){

     this.empleados.splice(indice,1);

     this.dataService.eliminarEmpleado(indice);
     
     if(this.empleados != null) this.dataService.guardarEmpleados(this.empleados);
  }
  
}
  