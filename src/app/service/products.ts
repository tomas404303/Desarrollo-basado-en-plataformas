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
      description: 'Aguardiente Antioqueño is a traditional Colombian spirit made from sugarcane. It has a smooth and slightly sweet flavor with hints of anise. Perfect for celebrations and social gatherings.',
      price: 30000,
      image: 'assets/images/alcohol2.jpg'
    },
    {
      id: 2,
      name: 'smirnoff',
      description: 'Smirnoff is a popular brand of vodka known for its smooth and clean taste. It is made from high-quality grains and undergoes a rigorous distillation process to ensure purity. Smirnoff is versatile and can be enjoyed neat, on the rocks, or in a variety of cocktails.',
      price: 60000,
      image: 'assets/images/alcohol3.jpg'
    },
    {
      id: 3,
      name: 'smirnoff rojo',
      description: 'Smirnoff Red is a flavored vodka that combines the classic smoothness of Smirnoff with a burst of fruity flavor. It is infused with natural fruit essences, creating a vibrant and refreshing taste. Smirnoff Red is perfect for those who enjoy a sweeter and more flavorful vodka experience.',
      price: 50000,
      image: 'assets/images/alcohol4.jpg'
    },
    {
      id: 4,
      name: 'smirnof de lulo',
      description: 'Smirnoff Lulo is a unique flavored vodka that captures the essence of the exotic lulo fruit. It offers a tangy and refreshing taste with hints of citrus and tropical flavors. Smirnoff Lulo is perfect for those looking to add a twist to their cocktails or enjoy a vibrant and fruity vodka experience.',
      price: 90000,
      image: 'assets/images/alcohol5.jpg'
    },
    {
      id: 5,
      name: 'smirnoff n°47',
      description: 'Smirnoff No. 47 is a premium vodka that embodies sophistication and elegance. Crafted with meticulous attention to detail, it offers a smooth and refined taste with subtle hints of vanilla and oak. Smirnoff No. 47 is perfect for those seeking a luxurious vodka experience, whether enjoyed neat or in upscale cocktails.',
      price: 120000,
      image: 'assets/images/alcohol6.jpg'
    },
    {
      id: 6,
      name: 'ron viejo de caldas tradicional',
      description: 'Ron Viejo de Caldas is a renowned Colombian rum known for its rich and complex flavor profile. It is crafted using traditional methods and aged to perfection, resulting in a smooth and well-balanced taste with notes of caramel, vanilla, and oak. Ron Viejo de Caldas is perfect for sipping neat or enjoying in classic rum cocktails.',
      price: 80000,
      image: 'assets/images/alcohol7.jpg'
    },
    {
      id: 7,
      name: 'ron viejo de caldas añejo',
      description: 'Ron Viejo de Caldas Añejo is a premium aged rum that showcases the craftsmanship and heritage of Colombian rum-making. It is carefully aged in oak barrels, allowing it to develop a deep and complex flavor profile with rich notes of dried fruits, spices, and toasted oak. Ron Viejo de Caldas Añejo is perfect for savoring neat or enjoying in sophisticated rum cocktails.',
      price: 150000,
      image: 'assets/images/alcohol8.jpg'
    },
    {
      id: 8,
      name: 'cacique añejo',
      description: 'Cacique Añejo is a distinguished Venezuelan rum known for its exceptional quality and rich flavor. It is aged to perfection, resulting in a smooth and well-rounded taste with notes of caramel, vanilla, and tropical fruits. Cacique Añejo is perfect for sipping neat or enjoying in classic rum cocktails.',
      price: 110000,
      image: 'assets/images/alcohol9.jpg'
    },
    {
      id: 9,
      name: 'speed con vodka',
      description: 'Speed with Vodka is a popular energy drink that combines the invigorating effects of caffeine with the smoothness of vodka. It offers a refreshing and energizing experience, making it a favorite choice for those looking to stay alert and energized during social gatherings or late-night events.',
      price: 7000,
      image: 'assets/images/alcohol10.png'
    },
    {
      id: 10,
      name: 'vino de uvas',
      description: 'Wine made from grapes is a timeless and cherished beverage that has been enjoyed for centuries. It is crafted through the fermentation of grape juice, resulting in a diverse range of flavors and styles. From bold reds to crisp whites, grape wine offers a delightful experience for wine enthusiasts and connoisseurs alike.',
      price: 40000,
      image: 'assets/images/alcohol11.jpg'
    },

    ]

    constructor() { }
      getProducts(): Products[] {
        return this.products;}
    ;

    }


