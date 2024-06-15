import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { Router } from '@angular/router';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']  // Corrected styleUrl to styleUrls
})
export class ProductsComponent implements OnInit {


  constructor(private productService: ProductService,
              private router : Router,
              public appState : AppStateService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    
    this.appState.setProductState({
      status : "LOADING"
    })
    this.productService.getProducts(this.appState.productState.currentPage, this.appState.productState.pageSize).subscribe({
      next: (resp) => {
        
          this.appState.productState.products = resp.body?.data as Product[];
          this.appState.productState.totalItems = resp.body?.items?? 0; 
          this.appState.productState.totalPages = resp.body?.pages?? 0;
          this.appState.setProductState({
            status : "LOADED"
          })
        
      },
      error: (err) => {
        console.error('Error fetching products', err);
        this.appState.setProductState({
          status : "ERROR",
          errorMessage : err
        })
      }
    });
  }

  handleChecked(item: Product) {
    this.productService.checkProduct(item).subscribe({
      next: updatedProduct => {
        item.checked = !item.checked;
      }
    });
  }

  handleDelete(product: Product) {
    if (confirm("Etes-vous sûr ?")) {
      this.productService.deleteProduct(product).subscribe({
        next: value => {
          this.appState.productState.products = this.appState.productState.products.filter(p => p.id !== product.id);
        }
      });
    }
  }

  searchProducts() {
    this.appState.setProductState({
      status : "LOADING"
    })
    this.appState.productState.currentPage=1;
    this.appState.productState.totalPages=0;
    this.productService.searchProducts(this.appState.productState.keyword, this.appState.productState.currentPage, this.appState.productState.pageSize).subscribe({
      next: value => {
        this.appState.productState.products = value;
        this.appState.setProductState({
          status : "LOADED"
        })
        
      },
      error :err => {
        this.appState.setProductState({
          status : "ERROR",
          errorMessage : err
        })
      }
    });
  }

  handleGoToPage(page: number) {
    this.appState.productState.currentPage = page;
    this.getProducts();
  }


  handleEdit(product:Product){
    this.router.navigateByUrl(`/admin/editProduct/${product.id}`)
  }
}
