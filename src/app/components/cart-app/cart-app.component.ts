import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../models/product";

@Component({
  selector: 'cart-app',
  standalone: true,
  imports: [],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit{

  products: Product[]  = []; //Iniciamos en un arreglo vacío

    constructor(private service: ProductService) {
    }

  ngOnInit(): void {
      this.products  = this.service.findAll();
  }
}
