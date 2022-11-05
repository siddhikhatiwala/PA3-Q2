import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  uri="http://localhost:8000/cart";
  uri1="http://localhost:8000/product";

  constructor(private http:HttpClient) { }

  addProduct(product_name: String, quantity: Number){
    const obj={
      product_name: product_name,
      quantity: quantity
    }
    this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
  }

  getCart() :Observable<Cart[]> {    
    return this.http.get<Cart[]>(`${this.uri}`);
  }

  getProducts() :Observable<Product[]> {   
    return this.http.get<Product[]>(`${this.uri1}`);
  }

  editItem(id :any) {
    return this.http.get(`${this.uri}/${id}`);
    }

  updateItem(id :any,product_name :String, quantity :Number) {
      const obj = {
          product_name: product_name,
          quantity: quantity
      };
      this.http.put(`${this.uri}/${id}`, obj).subscribe(res => console.log('Done'));
    }

    deleteItem(id :any) {
      return this.http.delete(`${this.uri}/${id}`);
    }
}
