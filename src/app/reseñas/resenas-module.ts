import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resenas } from './resenas/resenas';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    Resenas
  ],
  exports: [Resenas]
})
export class ResenasModule { }
