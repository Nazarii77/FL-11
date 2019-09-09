import {Component, Input, OnInit} from '@angular/core';
import {News} from "../news/news.component";

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
 @Input() news : News[];
 @Input() searchText;
  constructor() { }

  ngOnInit() {
  }

}
