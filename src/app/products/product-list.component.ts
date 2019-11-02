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

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [{
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

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}

