import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})

export class ProductService{

    products: Product[]=[
        new Product(1,'C Coding','lorem impsum',236.20,'https://m.media-amazon.com/images/I/715xbtLCSVL._SL1360_.jpg'),
        new Product(2,'Dragon Ball Super','lorem impsum',124.29,'https://m.media-amazon.com/images/I/71-dEkSNu4L._SL1200_.jpg'),
        new Product(3,'Aprende Python','lorem impsum',366.57,'https://m.media-amazon.com/images/I/51zQD4haANL._SL1500_.jpg'),
        new Product(4,'JavaScript for Dummies','lorem impsum',413.00,'https://m.media-amazon.com/images/I/81ycHtBjMWL._SL1500_.jpg'),
        new Product(5,'Aprende C++','lorem impsum',365.52,'https://m.media-amazon.com/images/I/618X9iqzSVL._SL1500_.jpg'),
        new Product(6,'Disney Baby','lorem impsum',239.00,'https://m.media-amazon.com/images/I/81XhZgzezrL._SL1500_.jpg')
    ];

    constructor(){}

    getProducts(): Product[]{
        return this.products;
    }
}