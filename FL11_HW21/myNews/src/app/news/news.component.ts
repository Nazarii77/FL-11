import { Component, OnInit } from '@angular/core';
export interface News {
  title:string
  description:string

}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news: News[] = [{
    title: 'War in Ukraine',
    description:'The Russian military intervention in Ukraine, sometimes called the Russo-Ukrainian War,[68][69][70] is a series of military actions that started in February 2014 and continues into 2019, including in the Crimean peninsula, the Donbas region in eastern Ukraine, and related activities in other locations.\n' +
      '\n' +
      'After Euromaidan protests and the fall of Ukrainian president Viktor Yanukovych, Russian soldiers without insignias took control of strategic positions and infrastructure within the Ukrainian territory of Crimea.'

  }]
  constructor() { }

  ngOnInit() {
  }

}
