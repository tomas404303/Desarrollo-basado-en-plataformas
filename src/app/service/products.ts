import { Injectable } from '@angular/core';
import { get } from 'http';


export interface Products {
  id : number;
  name : string;
  description : string;
  price : number;
  image : string;
  
}

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  private products: Products[] = [
    {
      id: 1,
      name: 'aguardiente antioqueño',
      description: 'Licor colombiano con sabor a anís, ideal para celebraciones.',
      price: 30000,
      image: 'assets/images/alcohol2.jpg'
    },
    {
      id: 2,
      name: 'smirnoff',
      description: 'Vodka suave y puro, perfecto para cocteles.',
      price: 60000,
      image: 'assets/images/alcohol3.jpg'
    },
    {
      id: 3,
      name: 'smirnoff rojo',
      description: 'Vodka con sabor frutal, dulce y refrescante.',
      price: 50000,
      image: 'assets/images/alcohol4.jpg'
    },
    {
      id: 4,
      name: 'smirnoff de lulo',
      description: 'Vodka con sabor a lulo, cítrico y tropical.',
      price: 90000,
      image: 'assets/images/alcohol5.jpg'
    },
    {
      id: 5,
      name: 'smirnoff n°47',
      description: 'Vodka premium con notas de vainilla y roble.',
      price: 120000,
      image: 'assets/images/alcohol6.jpg'
    },
    {
      id: 6,
      name: 'ron viejo de caldas tradicional',
      description: 'Ron colombiano con notas de caramelo y vainilla.',
      price: 80000,
      image: 'assets/images/alcohol7.jpg'
    },
    {
      id: 7,
      name: 'ron viejo de caldas añejo',
      description: 'Ron añejado con sabor profundo y toques de roble.',
      price: 150000,
      image: 'assets/images/alcohol8.jpg'
    },
    {
      id: 8,
      name: 'cacique añejo',
      description: 'Ron venezolano suave con notas dulces y frutales.',
      price: 110000,
      image: 'assets/images/alcohol9.jpg'
    },
    {
      id: 9,
      name: 'speed con vodka',
      description: 'Bebida energética con vodka, refrescante y estimulante.',
      price: 7000,
      image: 'assets/images/alcohol10.png'
    },
    {
      id: 10,
      name: 'vino de uvas',
      description: 'Vino clásico de uvas, suave y aromático.',
      price: 40000,
      image: 'assets/images/alcohol11.jpg'
    }
    ]

    constructor() { }
      getProducts(): Products[] {
        return this.products;}
    ;

    }


