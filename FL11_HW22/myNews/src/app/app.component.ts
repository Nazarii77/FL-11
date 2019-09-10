import {Component, Input} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNews';
  @Input() searchText: any;

  todos: AngularFireList<any>;
  keysTodos = [];
  countTodos: number = 0;
  todo: any;
  db: any;

  ngOnInit() {
    /*    this.todos = this.db.list('/todos', ref =>
        ref.limitToFirst(11));
        this.todos.snapshotChanges().subscribe(tmp => {
        this.keysTodos = tmp;
        this.countTodos = tmp.length;
        })*/

  /*  var config = {
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
    var databaseRef = firebase.database().ref('news/');*/
    //console.log(databaseRef)
    /*   var rowIndex = 1;
       databaseRef.once('value', function(snapshot) {
         snapshot.forEach(function(childSnapshot) {
           var childKey = childSnapshot.key;
           var childData = childSnapshot.val();
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
       });*/


    /*   function save_news(){
         var news_title = document.getElementById('news_title').value;
         var news_description= document.getElementById('news_description').value;
         var news_image= document.getElementById('news_image').value;
         var uid = firebase.database().ref().child('news').push().key;
         var data = {
           news_id: uid,
           news_title: news_title,
           news_description : news_description,
           news_image: news_image
         }
       }
   */
  }
}

