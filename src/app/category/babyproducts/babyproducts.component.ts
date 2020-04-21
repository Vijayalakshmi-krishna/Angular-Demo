import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-babyproducts',
  templateUrl: './babyproducts.component.html',
  styleUrls: ['./babyproducts.component.css']
})
export class BabyproductsComponent implements OnInit {
  babyproductsarray;
  /*babyproducts_array=[
    {
      id:5,
      name:'ChildCare Spout Cup',
      price:'Rs.400',
      description:'0% BPA Easy to hold for little ones and sip Easy to clean.Prefect fro feeding while on the go Very convenient to use.',
      imgsrc:"babysipper",
      reviews:50,
      votes:90,
      likes:64,
      sizeS:false,
      sizeM:true,
      sizeL:false,
      sizeXL:true
    },
    {
      id:6,
      name:'Born Baby Multipurpose Mother Bag',
      price:'Rs.1000',
      description:'Baby Boys Clothing Sets Summer Kids Clothes For boys Lion Shirt + Shorts Kids Cartoon Children Clothes Suits',
      imgsrc:"babymotherbag",
      reviews:25,
      votes:78,
      likes:86,
      sizeS:false,
      sizeM:true,
      sizeL:true,
      sizeXL:true
    }
  
  ]*/
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.productservice.viewCategory("babyproducts").subscribe((viewData) => {

      this.babyproductsarray=viewData
     
  });
  }

}
