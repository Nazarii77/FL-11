import {Component, Input} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

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
    this.todos = this.db.list('/todos', ref =>
    ref.limitToFirst(11));
    this.todos.snapshotChanges().subscribe(tmp => {
    this.keysTodos = tmp;
    this.countTodos = tmp.length;
    })
    }  
 

}

