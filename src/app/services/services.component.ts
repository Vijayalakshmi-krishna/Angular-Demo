import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
toysArray;
textileArray;
babyProductsArray;
  categoryArray = [
    { catName: "Toys", routename: "toys" ,catDb:"toys"},
    { catName: "Kids Fashion", routename: "textile" ,catDb:"fashion"},
    { catName: "Baby Products", routename: "babyproducts" ,catDb:"babyproducts"}
  ]

  constructor(private productservice: ProductService) {


  }

  ngOnInit(): void {
    this.productservice.viewCategory(this.categoryArray[0].catDb).subscribe((viewData) => {

      this.toysArray=viewData
     
    });

    this.productservice.viewCategory(this.categoryArray[1].catDb).subscribe((viewData) => {

      this.textileArray=viewData
     
    });

    this.productservice.viewCategory(this.categoryArray[2].catDb).subscribe((viewData) => {

      this.babyProductsArray=viewData
      
    });
}

}
