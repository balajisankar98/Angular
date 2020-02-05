import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';
  
  items :Item[] = [];

  addItem(addItem : Item){
    this.items.push(addItem);
  }

}
