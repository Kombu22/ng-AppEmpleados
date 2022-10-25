import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServiciosEmpleadosService } from './servicios-empleados.service';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    
    firebase.initializeApp({

      apiKey: "AIzaSyC_f6XajZ_yTPg77Wem2OS9VX5PLNnS8-I",

      authDomain: "mis-clientes-8be5b.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
}
