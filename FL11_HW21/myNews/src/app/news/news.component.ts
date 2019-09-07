import {Component, Input, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";


export interface News {
  title:string
  description:string
  avatarUrl?: string

}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news: News[] = [{
    title: 'War in Ukraine',
    avatarUrl:'https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/ukraine-515781.jpg',
    description:'The Russian military intervention in Ukraine, sometimes called the Russo-Ukrainian War,  is a series of military actions that started in February 2014 and continues into 2019, including in the Crimean peninsula, the Donbas region in eastern Ukraine, and related activities in other locations.\n' +
      '\n' +
      'After Euromaidan protests and the fall of Ukrainian president Viktor Yanukovych, Russian soldiers without insignias took control of strategic positions and infrastructure within the Ukrainian territory of Crimea.'

  },
    {
      title: 'War in Syria',
      avatarUrl:'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492186983/articles/2015/01/26/ukraine-is-losing-the-war-on-3-fronts/150126-weiss-ukraine-tease_ylzsql',
      description: 'is an ongoing multi-sided civil war in Syria fought between the Ba\'athist Syrian Arab Republic led by President Bashar al-Assad, along with domestic and foreign allies, and various domestic and foreign forces opposing both the Syrian government and each other in varying combinations.'

    },

    {
      title: 'Fashion week in Paris',
      avatarUrl:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/gettyimages-1133769350-1.jpg',
      description: 'Chanel paid homage to the late Karl Lagerfeld on Tuesday morning by beginning its highly-anticipated Paris Fashion Week show with a minute’s silence.\n' +
        '\n' +
        'Lagerfeld, who died on 19 February aged 85, had been creative director at the luxury French fashion house for more than 30 years.\n' +
        '\n' +
        'Under his reign, the brand became synonymous with unbridled grandeur, complete with opulent accessories, A-list muses, and spectacular catwalk settings.'
    }

]
  /*filter: any;*/
/*  searchText: string;*/
  @Input()  searchText : any;

  constructor() { }

  ngOnInit() {
  }
  highlightSelected(searchText) {
    console.log(searchText);
    // your rest code goes here

  }
}
