import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactanosComponent } from './pages/contact/contact.component';
import { CalendarioComponent } from './pages/calendario/calendario';
import { NoticiasComponent } from './pages/noticias/noticias';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductsComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'contacto', component: ContactanosComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
