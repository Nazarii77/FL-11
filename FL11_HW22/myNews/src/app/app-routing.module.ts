import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewsComponent } from './add-news/add-news.component';
import { MenuComponent} from './menu/menu.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'menu'},
  {path: '' , component: MenuComponent},
  {path: 'add' , component: AddNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
