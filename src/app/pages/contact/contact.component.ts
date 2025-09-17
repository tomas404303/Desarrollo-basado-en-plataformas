import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactanosComponent {
  mensajes: any[] = [];
  nuevoMensaje: any = { nombre: '', correo: '', telefono: '', mensaje: '' };

  guardarMensaje(event: Event) {
    event.preventDefault();

    // Guardar mensaje
    this.mensajes.push({ ...this.nuevoMensaje });

    // Blanquear inputs
    this.nuevoMensaje = { nombre: '', correo: '', telefono: '', mensaje: '' };

    // Resetear formulario
    (event.target as HTMLFormElement).reset();
  }
}
