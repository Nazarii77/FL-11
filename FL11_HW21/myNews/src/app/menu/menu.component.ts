import {Component, Input, OnInit, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {News} from '../news/news.component';
import { EventEmitter } from 'events';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {
  @Input() news: News[];
 /* @Input() searchText : string  ;*/
 /* @Input()  searchText: any;*/
  // @ts-ignore
  @Output() searchTextChange = new EventEmitter<searchText>();
  @Output() searchText = 'war';

  // setValue() { this.searchText = 'War'; }
  constructor() { }

  ngOnInit() {

  }
  highlightSelected(searchText) {
    console.log(searchText);
    // your rest code goes here
  }
}
