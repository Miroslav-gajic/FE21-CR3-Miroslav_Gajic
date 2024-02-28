import { Component, OnInit } from '@angular/core';
import { IData } from '../IData';
import { ActivatedRoute } from '@angular/router';
import { data } from '../data';
import { WarenkorbService } from '../warenkorb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  produkt: IData|undefined = {} as IData;
  id: number = 0;
  alert: boolean = false;

  constructor(private route: ActivatedRoute, private CS: WarenkorbService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.produkt = data.find(e=>e.id == this.id);
  }

  addToCart(){
    if(this.produkt){ 
      this.CS.addToCart(this.produkt);
      this.alert = true;
    }
  }
}
