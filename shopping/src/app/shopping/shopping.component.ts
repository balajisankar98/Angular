import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  @Input("currentItem") item : {name:string , qnt:number } ;
  @Input() index:number ;
  constructor() { }

  ngOnInit() {
  }

}
