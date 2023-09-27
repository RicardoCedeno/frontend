import { Component } from '@angular/core';
import { Product } from '../classes/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  Products: Product[]=[
    {
      id:1,
      description:"Nintendo Switch Oled",
      image: "assets/switch oled.jpg",
      name: "Macbook air 13",
      price: 2000000
    },
    {
      id:2,
      description:"Tablet Samsung",
      image: "assets/tablet.jpg",
      name: "Tablet Samsung",
      price: 1800000
    }
    

  ]

}
