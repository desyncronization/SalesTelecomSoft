import { Component } from '@angular/core';

import { Day }  from './day';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'SalesTelecomSoft';
  selectedDay:Day = {num:'',enabled:false};  
  onSelectDay(day):void{
    this.selectedDay = day;
  }
}