import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  toys_array;
/*toys_array=[
  {
    id:1,
    productId:"T001",
    productName:'camel',
  price:'Rs.50',
  description:'Let your kid enjoy this brightly colored friction doggy toy. Freewheel action to race them around',
  imgsrc:"cameltoy",
  reviews:10,
  votes:95,
  likes:40,
  sizeS:true,
  sizeM:true,
  sizeL:false,
  sizeXL:false
  },
  {
    id:2,
    productId:"T002",
    productName:'caterpillar',
    price:'Rs.200',
    description:'Delight your little ones by presenting them with this adorable toy.',
    imgsrc:"caterpillar",
    reviews:5,
    votes:60,
    likes:80,
    sizeS:false,
    sizeM:true,
    sizeL:true,
    sizeXL:false
  },
  {
    id:3,
    productId:"T003",
    productName:'Elephant',
    price:'Rs.500',
    description:'Ultra Baby Cute Elephant Plush Soft Toy for Kids (Gray)',
    imgsrc:"elephant",
    reviews:5,
    votes:60,
    likes:80,
    sizeS:false,
    sizeM:true,
    sizeL:true,
    sizeXL:false
  }
]*/
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.productservice.viewCategory("toys").subscribe((viewData) => {

      this.toys_array=viewData
      
  });
}

}
