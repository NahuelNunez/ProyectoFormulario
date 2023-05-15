import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface DatosFormulario {
  nombre: string;
  edad: number;
  amigos: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  
  
    // ... enviar los datos del formulario a un servidor ...
  
    datos: DatosFormulario[] = [];
    onSubmit(formulario: NgForm) {
      this.datos.push(formulario.value);
      formulario.reset();
    }
   
}
