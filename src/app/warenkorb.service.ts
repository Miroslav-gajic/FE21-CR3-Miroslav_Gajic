import { Injectable } from '@angular/core';
import { IData } from './IData';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
  korb: IData[] = [];
  constructor() { }
  total= 0;
  discount = 0;
  service = 0;

  addToCart(produkt: IData){
    this.korb.push(produkt);
  }

  getCart(){
    return this.korb;
  }

  clearCart(){
    this.korb = [];
    return this.korb;
  }

  calculateTotal() {
    let total = 0;

    for(let item of this.korb){
      total += item.qtty * item.price;
    }
    return total;
  }

  calculateDiscount(){
    this.discount = this.total * 0.85;
    return this.discount;
  }

  calculateService(){
    if(this.total <= 40){
      this.service = this.total * 1.1;
    }else{
      this.service = this.discount * 1.1;
    }
    return this.service;
  }
}
