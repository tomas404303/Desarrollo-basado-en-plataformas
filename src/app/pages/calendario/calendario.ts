import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  standalone: true,
  templateUrl: './calendario.html',
  styleUrls: ['./calendario.css']
})
export class CalendarioComponent {
  fechas: string[] = [];
  nuevaFecha = '';

  actualizarFecha(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nuevaFecha = input.value;
  }

  agregarFecha(event: Event) {
    event.preventDefault();
    if (this.nuevaFecha) {
      this.fechas.push(this.nuevaFecha);
      this.nuevaFecha = '';
    }
  }
}
