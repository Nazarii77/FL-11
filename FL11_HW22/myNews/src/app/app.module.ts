import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewslistComponent } from './newslist/newslist.component';
import { NewsComponent } from './news/news.component';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { DataService } from './data.service';
import { AddNewsComponent } from './add-news/add-news.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
export const firebaseConfig = {
};
/*// @ts-ignore
import { AngularFireModule } from '@angular/fire';
// @ts-ignore
import { AngularFireDatabaseModule } from '@angular/fire/database';
// @ts-ignore
import { environment } from 'src/environments/environment';*/

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewslistComponent,
    NewsComponent,
    ParentComponent,
    SiblingComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
    /*,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
