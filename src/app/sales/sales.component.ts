import { Component } from '@angular/core';
import {Product} from 'src/app/classes/Product'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {

  ProductsSales: Product[] =[
    {
      id: 4,
      name: "Playstation 5",
      description:"Playstation 5 para jugar",
      image: "assets/ps 5 2.jpg",
      price:2500000
    },
    {
      id: 5,
      name: "Switch Oled",
      description:"Playstation 5 para jugar",
      image: "assets/switch oled.jpg",
      price:1800000
    },
    {
      id: 6,
      name: "Auriculares",
      description:"Playstation 5 para jugar",
      image: "assets/headphones 2.jpg",
      price:1800000
    }
  ]
}
