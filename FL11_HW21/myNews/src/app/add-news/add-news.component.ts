import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  save() {
    console.log('New article added');
    // your rest code goes here
  }
}
