import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css']
})
export class NoticiasComponent {
  noticias = [
    { titulo: 'Nueva actualización de bebidas', fecha: '2025-09-17' },
    { titulo: 'Se abre nueva tienda  de licores', fecha: '2025-09-20' },
    { titulo: 'Evento de bebidas bogota', fecha: '2025-09-25' },
    {titulo: 'hola mundo', fecha: '3030-10-20'}
  ];
}
