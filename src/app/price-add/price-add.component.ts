import { Component, OnInit } from '@angular/core';
import {Price} from './Price';

@Component({
  selector: 'app-price-add',
  templateUrl: './price-add.component.html',
  styleUrls: ['./price-add.component.css']
})
export class PriceAddComponent implements OnInit {
  price : Price;
  constructor() { }

  ngOnInit(): void {
  }

}
