import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PaginatedResponse } from '../model/paginatedResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProducts(page: number=1, size:number=3){
    return this.http.get<PaginatedResponse>(`http://localhost:8089/products?_page=${page}&_per_page=${size}`,{observe:'response'});
  }


  checkProduct(product : Product){
    return this.http.patch(`http://localhost:8089/products/${product.id}`, {checked:!product.checked})
  }


  deleteProduct(product : Product){
    return this.http.delete(`http://localhost:8089/products/${product.id}`)
  }
  saveProduct(product : Product){
    return this.http.post<Product>(`http://localhost:8089/products`, product)
  }

  searchProducts(keyword:string, page:number, size:number=3){
    return this.http.get<Product[]>(`http://localhost:8089/products?name=${keyword}&_page=${page}&_per_page=${size}`);
  }
  



  countProducts(): Observable<number> {
    return this.http.get<Product[]>("http://localhost:8089/products").pipe(
      map(products => products.length),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError('An error occurred. Please try again later.');
  }


  getProductById(productId:number){
    return this.http.get<Product>(`http://localhost:8089/products/${productId}`)
  }


updateProduct(product :Product){
  return this.http.put<Product>(`http://localhost:8089/products/${product.id}`, product)
}


}
