import { Component } from '@angular/core';
import { data } from '../data';
import { IData } from '../IData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produkte: IData[] = data;



}
