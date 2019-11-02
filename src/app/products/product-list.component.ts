import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';

  products: IProduct[] = [{
    productId: 1,
    productName: 'Product 1',
    productCode: 'Code-1',
    releaseDate: '2019-11-01',
    price: 50,
    description: 'Description 1...',
    starRating: 3,
    imageUrl: ''
  }] ;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}

