import { Component } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public appState : AppStateService, private router : Router){
    
  }
  actions : Array<any> = [
    {title:"Home", path:"/admin/home", icon:"bi bi-house"},
    {title:"Products", path:"/admin/products", icon:"bi bi-box-seam"},
    {title:"New Product", path:"/admin/newProduct", icon:"bi bi-plus-circle"}
  ]

  currentAction:any ;
  setCurrentAction(action:any){
    this.currentAction=action ;

  }

  login() {
    this.router.navigateByUrl("/login")
  }

  logout() {
   this.appState.authState={};
   this.router.navigateByUrl("/login")
  }

}
