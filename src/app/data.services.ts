import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    
    constructor(private httpClient:HttpClient, private loginService:LoginService){}


    
    cargarEmpleados(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://mis-clientes-8be5b-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarEmpleados(empleados:Empleado[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://mis-clientes-8be5b-default-rtdb.firebaseio.com/datos.json?auth=' + token, empleados).subscribe({
            next: (v) => console.log('Se han guardado los empleados ' + v),
            error: (e) => console.log('Error: ' + e),
          });
        
    }

    actualizarEmpleado(indice:number,empleado:Empleado){
        const token = this.loginService.getIdToken();
        let url='https://mis-clientes-8be5b-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth=' + token;

        this.httpClient.put(url, empleado).subscribe({
            next: (v) => console.log('Se ha modificado correctamente el empleado: ' + v),
            error: (e) => console.log('Error: ' + e),
          });
    }

    eliminarEmpleado(indice:number){
        
        const token = this.loginService.getIdToken();
        let url='https://mis-clientes-8be5b-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth=' + token;

        this.httpClient.delete(url).subscribe({
            next: (v) => console.log('Se ha eliminado correctamente el empleado: ' + v),
            error: (e) => console.log('Error: ' + e),
          });
    }
}