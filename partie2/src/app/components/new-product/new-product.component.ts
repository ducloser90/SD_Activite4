import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  productForm!: FormGroup ;
  constructor(private fb: FormBuilder, private productService : ProductService) { }
  ngOnInit() {
    this.productForm = this.fb.group({
      name: this.fb.control("", [Validators.required]),
      price: this.fb.control(0, [Validators.required]),
      checked: this.fb.control(false),
      
    });
  }




  
  saveProduct(){
    let product = this.productForm.value ;
    this.productService.saveProduct(product).subscribe({
      next: data => {
        alert(JSON.stringify(data))
      },
      error : err =>{
        console.log(err);
      }
    });
  }

}
