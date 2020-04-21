import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  productsForm;
  constructor(private productservice: ProductService, private router: Router) {
    this.productsForm = new FormGroup({
      'productName': new FormControl('', Validators.required),
      'productId': new FormControl('', Validators.required),
      'categoryName': new FormControl('Toys', Validators.required),
      'imgsrc':new FormControl('',Validators.required),
      'description': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
      'rating':new FormControl('', Validators.required)     

    })

  }

  ngOnInit(): void {
  }

  sendData() {
    if (this.productsForm.valid) {
      //console.log(this.productsForm.value);

      this.productservice.postProduct(this.productsForm.value).subscribe((productData) => {

        this.router.navigate(['/list'])
      })
    }

  }

}
