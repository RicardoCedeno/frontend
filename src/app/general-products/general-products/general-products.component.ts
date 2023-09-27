import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/Product';

@Component({
  selector: 'app-general-products',
  templateUrl: './general-products.component.html',
  styleUrls: ['./general-products.component.scss']
})
export class GeneralProductsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  Products: Product[] =[
    {
      id: 1,
      name: "Chasis - Torre",
      description:"Nintendo switch para jugar",
      image: "assets/chasis.jpg",
      price:400000
    },
    {
      id: 2,
      name: "Tablet Samsung",
      description:"Playstation 5 para jugar",
      image: "assets/tablet.jpg",
      price:2300000
    },
    {
      id: 3,
      name: "Teclado mecánico",
      description:"Playstation 5 para jugar",
      image: "assets/teclado.jpg",
      price:250000
    },
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

  images:any[]=[
    {
      thumbnailImageSrc: "dkdk"
    }
  ];
}
