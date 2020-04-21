import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  deleteForm;
  constructor(private productservice: ProductService, private router: Router) {
    this.deleteForm = new FormGroup({
      'productId': new FormControl('', Validators.required)
      
    })

   
  }

  ngOnInit(): void {
  }
  deleteData() {
    if (this.deleteForm.valid) {
     
      this.productservice.deleteProduct(this.deleteForm.value.productId).subscribe((deleteData) => {
       this.router.navigate(['/list']);
      })
    }
  }

}
