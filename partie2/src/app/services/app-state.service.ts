import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productState: {
    products: Product[],
    keyword: string,
    totalPages: number,
    pageSize: number,
    currentPage: number,
    totalItems: number,
    status : string, 
    errorMessage?: string | { message: string }

  } = {
    products: [],
    keyword: "",
    totalPages: 0,
    pageSize: 3,
    currentPage: 1,
    totalItems: 0,
    status :"",
    errorMessage :""
  }

  constructor() { }

  public authState : any ={
    isAuthenticated : false,
    username:undefined,
    roles: undefined,
    token : undefined
  }
   public setAuthState(state: any ){
    this.authState = {...this.authState, ...state} ;
   }

  public setProductState(state:any):void {
   this.productState={...this.productState, ...state}
 }

}
