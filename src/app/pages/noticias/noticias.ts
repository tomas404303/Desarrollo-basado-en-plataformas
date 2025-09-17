import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css']
})
export class NoticiasComponent {
  noticias = [
    { titulo: 'Nueva actualización de Angular', fecha: '2025-09-17' },
    { titulo: 'Se abre curso de programación en la U', fecha: '2025-09-20' },
    { titulo: 'Evento de tecnología en Bogotá', fecha: '2025-09-25' }
  ];
}
