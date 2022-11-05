import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Cart } from '../cart';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  cartForm: FormGroup;
  products: Product[] = [];
  item: any = {};
  constructor(private cs: CartService, private route:ActivatedRoute, private router:Router, private fb:FormBuilder) {
    this.cartForm = this.fb.group({
      product_name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
   }

  ngOnInit(): void {
    this.cs.getProducts().subscribe((data: Product[])=> {this.products=data;});
    this.route.params.subscribe(params => {
      this.cs.editItem(params['id']).subscribe(res => {
        this.item = res;
    });
  });
  }

  updateProduct() {
    this.cs.updateItem(this.item._id ,this.cartForm.value.product_name, this.cartForm.value.quantity);
    this.router.navigate(['']);
  }
}
