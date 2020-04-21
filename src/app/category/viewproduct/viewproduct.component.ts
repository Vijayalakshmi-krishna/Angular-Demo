import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})

export class ViewproductComponent implements OnInit {
  viewData;
  clickcnt=1;
  ratingArraych=[];
  ratingArrayNch=[];
  constructor(private productservice:ProductService,private router:Router) { 

  }

  ngOnInit(): void {
    this.viewData=this.productservice.viewItems();
   
    for (let i=0;i<this.viewData.rating;i++)
    {
      this.ratingArraych.push(i);
    }
  
    for (let j=0;j<(5-(this.viewData.rating));j++)
    {
      this.ratingArrayNch.push(j);
    }
    console.log(this.ratingArraych);
  
      

  }

  addCart()
  {
    this.viewData.quantity=this.viewData.quantity-1;
    this.productservice.editQuantity(this.viewData).subscribe((editData)=>{
     document.getElementById("addcart").innerHTML="ADD TO CART (" + this.clickcnt++ + ")";
    })
  }

}
