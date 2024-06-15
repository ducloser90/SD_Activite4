import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'; // Import FormControl here
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId!: number;
  productFormGroup!: FormGroup; // Initialize productFormGroup as a FormGroup instance

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.productFormGroup = this.fb.group({
          id: new FormControl(product.id),
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          checked: new FormControl(product.checked),
        });
      },
      error: (err) => {
        console.error('Error fetching product', err);
      }
    });
  }

  updateProduct(){
    let product : Product = this.productFormGroup.value ;
    this.productService.updateProduct(product).subscribe({
      next:data =>{
        alert(JSON.stringify(data))
      }
    })
  }


}
