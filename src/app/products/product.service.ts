import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): IProduct[] {
    return [{
      productId: 1,
      productName: 'Product 1',
      productCode: 'Code-1',
      releaseDate: '2019-11-01',
      price: 50,
      description: 'Description 1...',
      starRating: 3,
      imageUrl: ''
    }, {
      productId: 2,
      productName: 'Product 2',
      productCode: 'Code-2',
      releaseDate: '2019-11-02',
      price: 50,
      description: 'Description 2...',
      starRating: 4,
      imageUrl: ''
    }];
  }
}
