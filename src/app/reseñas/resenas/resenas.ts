import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Review {
  nombre: string;
  comentario: string;
  estrellas: number;
  fecha: Date;
}

@Component({
  selector: 'app-resenas',
  standalone: true,
  templateUrl: './resenas.html',
  styleUrls: ['./resenas.css'],
  imports: [
    CommonModule,
    NgFor,
    ReactiveFormsModule,
    DatePipe,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ]
})
export class Resenas {
  resenas: Review[] = [
    { nombre: 'Camilo', comentario: 'Excelente sabor y buena presentación.', estrellas: 5, fecha: new Date() },
    { nombre: 'Laura', comentario: 'Buen licor, pero algo costoso.', estrellas: 4, fecha: new Date() }
  ];

  resenaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resenaForm = this.fb.group({
      nombre: ['', Validators.required],
      comentario: ['', Validators.required],
      estrellas: [5, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  agregarResena() {
    if (this.resenaForm.valid) {
      const nueva: Review = {
        ...this.resenaForm.value,
        fecha: new Date()
      };
      this.resenas.unshift(nueva);
      this.resenaForm.reset({ estrellas: 5 });
    }
  }
}
