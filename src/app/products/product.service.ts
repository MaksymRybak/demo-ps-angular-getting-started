import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // TODO send error message to remote logging infrastructure
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      // client side or network error
      errorMsg = `An error occured: ${err.error.message}`;
    } else {
      // BE returned unsuccessful response code 
      errorMsg = `Server returned ${err.status}, error message is ${err.message}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }
}
