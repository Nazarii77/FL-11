import {Component, Input, OnInit} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import * as firebase from "firebase";


export interface News {
  title: string;
  description: string;
  avatarUrl?: string;

}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public news: News[] = [
     {
      title: 'Fashion week in Paris',
      avatarUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/gettyimages-1133769350-1.jpg',
      description: 'Chanel paid homage to the late Karl Lagerfeld on Tuesday morning by beginning its highly-anticipated Paris Fashion Week show with a minute’s silence.\n' +
        '\n' +
        'Lagerfeld, who died on 19 February aged 85, had been creative director at the luxury French fashion house for more than 30 years.\n' +
        '\n' +
        'Under his reign, the brand became synonymous with unbridled grandeur, complete with opulent accessories, A-list muses, and spectacular catwalk settings.'
    },
    {
    title: 'War in Ukraine',
    avatarUrl: 'https://cdn.images.express.co.uk/img/dynamic/78/590x/secondary/ukraine-515781.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'The Russian military intervention in Ukraine, sometimes called the Russo-Ukrainian War,  is a series of military actions that started in February 2014 and continues into 2019, including in the Crimean peninsula, the Donbas region in eastern Ukraine, and related activities in other locations.\n' +
      '\n' +
      // tslint:disable-next-line:max-line-length
      'After Euromaidan protests and the fall of Ukrainian president Viktor Yanukovych, Russian soldiers without insignias took control of strategic positions and infrastructure within the Ukrainian territory of Crimea.'

  },
    {
      title: 'War in Syria',
      // tslint:disable-next-line:max-line-length
      avatarUrl: 'https://e3.365dm.com/18/09/736x414/skynews-syria-rebels-douma_4426051.jpg?20180919091305',
      description: 'is an ongoing multi-sided civil war in Syria fought between the Ba\'athist Syrian Arab Republic led by President Bashar al-Assad, along with domestic and foreign allies, and various domestic and foreign forces opposing both the Syrian government and each other in varying combinations.'

    }

];
  /*filter: any;*/
/*  searchText: string;*/
 @Input() searchText: any;

  constructor() { }

  ngOnInit() {

    var config = {
      apiKey: "AIzaSyAb00uV8OFWO6p3mkaPzPwwLp6b6R5_x8U",
      authDomain: "mynews-f6a2e.firebaseapp.com",
      databaseURL: "https://mynews-f6a2e.firebaseio.com",
      projectId: "mynews-f6a2e",
      storageBucket: "mynews-f6a2e.appspot.com",
      messagingSenderId: "646343721329",
      appId: "1:646343721329:web:845d14429eb077cb0fb6d0"
    };
    firebase.initializeApp(config);
    var tblNews = document.getElementById('tbl_news_list');
    var databaseRef = firebase.database().ref('news/');
    console.log(databaseRef)

    databaseRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        console.log(childData.news_title);
        console.log(childData.news_image);
        console.log(childData.news_description);
        /* (this.News) = [
          {
            title: 'Fashion week in Paris2222',
            avatarUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/gettyimages-1133769350-1.jpg',
            description: 'Chanel paid homage to the late Karl Lagerfeld on Tuesday morning by beginning its highly-anticipated Paris Fashion Week show with a minute’s silence.\n' +
              '\n' +
              'Lagerfeld, who died on 19 February aged 85, had been creative director at the luxury French fashion house for more than 30 years.\n' +
              '\n' +
              'Under his reign, the brand became synonymous with unbridled grandeur, complete with opulent accessories, A-list muses, and spectacular catwalk settings.'
          }]*/
        var rowIndex = 1;
         var row = tblNews.insertRow(rowIndex);
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellimage = row.insertCell(2);
        var cellDescription = row.insertCell(3);
        cellId.appendChild(document.createTextNode(childKey));
        cellName.appendChild(document.createTextNode(childData.news_title));
        cellimage.appendChild(document.createTextNode(childData.news_image));
        cellDescription.appendChild(document.createTextNode(childData.news_description));
        rowIndex = rowIndex + 1;
      });
    });



  }
  highlightSelected(searchText) {
    console.log(searchText);
    // your rest code goes here

  }
}
