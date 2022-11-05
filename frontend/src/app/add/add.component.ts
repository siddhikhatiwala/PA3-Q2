import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  products: Product[] = [];
  cartForm: FormGroup;
  constructor(private route:ActivatedRoute, private router:Router, private fb:FormBuilder, private cs: CartService) {
    this.cartForm = this.fb.group({
      product_name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
   }

  ngOnInit(): void {
    this.cs.getProducts().subscribe((data: Product[])=> {this.products=data;});
  }

  addItem()
  {
    this.cs.addProduct(this.cartForm.value.product_name, this.cartForm.value.quantity);
    //alert(this.cartForm.value.product_name + " has been successfully added into your cart!");
    this.router.navigate([""]);
  }

}
