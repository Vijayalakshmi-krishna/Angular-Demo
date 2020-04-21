import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm;
  constructor(private productservice:ProductService,private router:Router) {
    this.editForm = new FormGroup({
      'productId': new FormControl('', Validators.required),
      'price':new FormControl('',Validators.required),
      'quantity':new FormControl('',Validators.required)
    })

  }

  ngOnInit(): void {
  }

  editData()
  {
    if(this.editForm.valid)
    {
      this.productservice.editProduct(this.editForm.value).subscribe((editData)=>{
        this.router.navigate(['/list'])
      })
    }
  }

}
