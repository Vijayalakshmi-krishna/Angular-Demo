import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/product.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 data =[];
  @Input() ItemData;
  ratingArraych=[];
  ratingArrayNch=[];
  constructor(private productservice:ProductService) {

    
    
  }

  ngOnInit(): void {
  for (let i=0;i<this.ItemData.rating;i++)
  {
    this.ratingArraych.push(i);
  }

  for (let j=0;j<(5-(this.ItemData.rating));j++)
  {
    this.ratingArrayNch.push(j);
  } 

    
  }
setItems()
{
 this.productservice.setItems(this.ItemData);
}

}
