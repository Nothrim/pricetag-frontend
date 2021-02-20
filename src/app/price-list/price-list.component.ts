import { Component, OnInit } from '@angular/core';
import {Price} from '../price-add/Price';
import {PRICES} from './Prices';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  prices: Price[] = PRICES;
  constructor() { }

  ngOnInit(): void {
  }

}
