import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './components/login/login.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {
    path:"admin", component:AdminTemplateComponent,canActivate:[AuthenticationGuard] ,children: [
      {path:"products", component:ProductsComponent},
      {path:"newProduct", component:NewProductComponent, canActivate:[AuthorizationGuard], data :{requiredRoles:['ADMIN']}},
      {path:"editProduct/:id", component:EditProductComponent, canActivate:[AuthorizationGuard], data :{requiredRoles:['ADMIN']}},
      {path:"home", component:HomeComponent},
      {path:"notAuthorized",component:NotAuthorizedComponent}
    ]
  },
  
  
  {path:"",redirectTo:"login",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
