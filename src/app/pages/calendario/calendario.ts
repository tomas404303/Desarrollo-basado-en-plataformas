import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './calendario.html',
  styleUrls: ['./calendario.css'],
  providers: [DatePipe] 
})
export class CalendarioComponent {
  fechas: string[] = [];
  nuevaFecha = '';
  dias= ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];

  constructor(private datePipe: DatePipe) {}

  actualizarFecha(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nuevaFecha = input.value;
  }

  agregarFecha(event: Event) {
    event.preventDefault();
    if (this.nuevaFecha) {
      const fechaSeleccionada = new Date(this.nuevaFecha);

      const ahora = new Date();

      const fechaFormateada = this.datePipe.transform(fechaSeleccionada, 'yyyy-MM-dd');
      const fechaActual = this.datePipe.transform(ahora, 'dd/MM/yyyy HH:mm:ss');

      this.fechas.push(`${fechaFormateada} (reservado el ${fechaActual})`);

      this.nuevaFecha = '';
    }
  }
}
