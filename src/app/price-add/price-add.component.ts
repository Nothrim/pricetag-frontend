import { Component, OnInit } from '@angular/core';
import {Price} from './Price';

@Component({
  selector: 'app-price-add',
  templateUrl: './price-add.component.html',
  styleUrls: ['./price-add.component.css']
})
export class PriceAddComponent implements OnInit {
  price: Price =   {name: 'Ziemniak'
    , amount: 1.5
    , currency: 'PLN'
    , photos: ['foto_ziemniaka.png', 'foto_ziemniak2.png']
    , discount: 0
    , qrCode: '11101010120'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
