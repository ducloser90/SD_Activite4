import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Modifier 'styleUrl' en 'styleUrls'
})
export class AppComponent {
  title = 'FirstApp';
  public currentRoute: any;

  constructor(private router: Router) {} // Injection du service Router dans le constructeur

  gotoHome() {
    this.currentRoute = "home";
    this.router.navigateByUrl("/home");
  }

  gotoProducts() {
    this.currentRoute = "products";
    this.router.navigateByUrl("/products");
  }
}
