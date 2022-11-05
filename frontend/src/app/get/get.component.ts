import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  cart: Cart[]=[];
  constructor(private cs:CartService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.cs.getCart().subscribe((data:Cart[])=>{this.cart=data;})
  }

  deleteProduct(id :any) {
    this.cs.deleteItem(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit(); 
    });
  }

}
