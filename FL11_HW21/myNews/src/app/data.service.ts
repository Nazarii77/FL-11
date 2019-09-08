import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/*@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}*/
@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('News');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

}
