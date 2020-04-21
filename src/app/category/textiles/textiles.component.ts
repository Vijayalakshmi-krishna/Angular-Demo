import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-textiles',
  templateUrl: './textiles.component.html',
  styleUrls: ['./textiles.component.css']
})
export class TextilesComponent implements OnInit {
  textiles_array;
  /*textiles_array=[
    {
      id:4,
      productId:"F001",
      productName:'Girls Cinderella Frock',
      price:'Rs.1000',
      description:'Girl Sofia Cosplay Costumes Sequin Bow Lace Purple Frock Kids Ankle Length Party Clothing Princess Dress Up Dresses For Girls',
      imgsrc:"girlfrock",
      reviews:40,
      votes:25,
      likes:48,
      sizeS:false,
      sizeM:true,
      sizeL:true,
      sizeXL:false
     
    },
    {
      id:5,
      productId:"F002",
      productName:'Boys Lion Dress',
      price:'Rs.650',
      description:'Baby Boys Clothing Sets Summer Kids Clothes For boys Lion Shirt + Shorts Kids Cartoon Children Clothes Suits',
      imgsrc:"lionsetdress",
      reviews:10,
      votes:50,
      likes:78,
      sizeS:false,
      sizeM:true,
      sizeL:false,
      sizeXL:true
    },
    {
      id:6,
      productId:"F003",
      productName:'Kerala Cotton Pattupavadai',
      price:'Rs.500',
      description:'Adorable ethnic pattu pavadai for kids',
      imgsrc:"pattupavadai",
      reviews:20,
      votes:40,
      likes:23,
      sizeS:false,
      sizeM:true,
      sizeL:false,
      sizeXL:true
    }
  
  ]*/
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

    this.productservice.viewCategory("fashion").subscribe((viewData) => {

      this.textiles_array=viewData
     
  });
  }

}
