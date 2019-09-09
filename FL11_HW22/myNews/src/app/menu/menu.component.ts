import {Component, Input, OnInit, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {News} from '../news/news.component';
import { EventEmitter } from 'events';
import {DataService} from '../data.service';



@Component({
  selector: 'app-menu',
  providers: [DataService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {
  @Input() news: News[];
 /* @Input() searchText : string  ;*/
 /* @Input()  searchText: any;*/
  // @ts-ignore
  // @Output() searchTextChange = new EventEmitter<searchText>();
  @Output() searchText   ;


  // setValue() { this.searchText = 'War'; }
  /*constructor() { }

  ngOnInit() {

  }*/
  message = 'myNews' ;
  title: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message );
  }

  newGlobal() {
    this.data.changeMessage('Global News');
    this.searchText  = '';
  }
  newUkraine() {
    this.data.changeMessage('News Ukraine');
    this.searchText  = 'Ukraine';
  }
  newParis() {
    this.data.changeMessage('News Paris');
    this.searchText  = 'Paris';
  }
  highlightSelected(searchText) {
    console.log(searchText);

    // your rest code goes here
  }
}
