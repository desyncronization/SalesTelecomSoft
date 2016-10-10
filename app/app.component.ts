import { Component } from '@angular/core';

import { Day }  from './day';
import { Doctor }   from './doctor';
import { Research } from './research';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'SalesTelecomSoft';
  selectedDay:Day = {num:'',enabled:false}; 
  selectedDoc:Doctor = {pk: 1, first_name:'', name: '', startage: 1, duration: 11, region: ''}; 
  selectedRes:Research = {pk: 1, name: '',cost:'',prep:''}; 
  onSelectDay(day):void{
    this.selectedDay = day;
  }
  onSelectDoc(doc):void{
    this.selectedDoc = doc;
  }
  onSelectRes(res):void{
    this.selectedRes = res;
  }
}