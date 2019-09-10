import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

function reload_page() {

}

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

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

    function save_news(){
      var news_title = document.getElementById('news_title').value;
      var news_description = document.getElementById('news_description').value;
      var news_image= document.getElementById('news_image').value;
      var uid = firebase.database().ref().child('news').push().key;
      var data = {
        news_id: uid,
        news_title: news_title,
        news_description: news_description,
        news_image: news_image,
      }
      var updates = {};
      updates['/news/' + uid] = data;
      firebase.database().ref().update(updates);
      //alert('The news are created successfully!');
      reload_page();
    }


  }
  save() {
    console.log('New article added');

    var news_title = document.getElementById('news_title').value;
    var news_description = document.getElementById('news_description').value;
    var news_image= document.getElementById('news_image').value;
    var uid = firebase.database().ref().child('news').push().key;
    var data = {
      news_id: uid,
      news_title: news_title,
      news_description: news_description,
      news_image: news_image,
    }
    var updates = {};
    updates['/news/' + uid] = data;
    firebase.database().ref().update(updates);

    
    // your rest code goes here
  }
}
