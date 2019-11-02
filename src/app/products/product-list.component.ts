import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';

  products: IProduct[] = [{
    productId: 1,
    productName: 'Product 1',
    productCode: 'Code',
    releaseDate: '2019-11-01',
    price: 50,
    description: '',
    starRating: 3,
    imageUrl: ''
  }] ;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}

