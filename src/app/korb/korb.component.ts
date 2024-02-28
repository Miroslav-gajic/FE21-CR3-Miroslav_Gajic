import { Component, OnInit } from '@angular/core';
import { IData } from '../IData';
import { WarenkorbService } from '../warenkorb.service';

@Component({
  selector: 'app-korb',
  templateUrl: './korb.component.html',
  styleUrl: './korb.component.css'
})
export class KorbComponent implements OnInit{
  korb: IData[] = [];
  total = 0;
  inclService = 0;
  discount = 0; 

  constructor(private CS: WarenkorbService){}

  ngOnInit(): void {
    this.korb = this.CS.getCart();
    this.total = this.CS.calculateTotal();
    this.discount = this.CS.calculateDiscount();
    this.inclService = this.CS.calculateService();
    
    
  }

  clear(){
    this.korb = this.CS.clearCart();
  }
}

// export class AppComponent {
//   quantity: number = 0;
//   totalAmount: number = 0;
//   discount: number = 0;


// }