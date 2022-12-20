import { Component } from '@angular/core';
import { goodsArray } from '../goodsArray.component';
import { goods } from '../goodsInterface.component';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css'],
})
export class GoodsComponent {
  goods: goods[] = goodsArray;
}
