import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword :string = "" ;



  constructor(){

  }
  ngOnInit(){
    this.products = [
      {"id":1, "name":"computer", "price":4300},
      {"id":2, "name":"Printer", "price":3255},
      {"id":3, "name":"Smartphone", "price":2100},
      {"id":4, "name":"Mouse", "price":111},
  
    ];
  }
  deleteProduct(p:any){
    let index = this.products.indexOf(p);
    this.products.splice(index,1);


}

search(){
  
  this.products=this.products.filter((p:any)=>p.name.includes(this.keyword) );
}
}
