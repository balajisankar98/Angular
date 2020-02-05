import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-add-shopping',
  templateUrl: './add-shopping.component.html',
  styleUrls: ['./add-shopping.component.css']
})
export class AddShoppingComponent implements OnInit {
  item :  Item =  new Item("apple",1);
  @Output() addThisItem = new EventEmitter<Item>();
  constructor() { }

  ngOnInit() {
  }
  addItem(){
    this.addThisItem.emit(this.item);
  }
}
