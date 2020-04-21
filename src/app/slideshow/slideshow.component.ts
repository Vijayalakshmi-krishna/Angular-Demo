import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
cardData;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
this.cardData=this.productservice.viewItems();

  }

}
