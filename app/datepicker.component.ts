import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Day } from './day';

@Component({
  selector: 'datepick',
  templateUrl: 'app/datepicker.component.html',
  styleUrls: ['app/datepicker.component.css'] 
})
export class DatepickComponent implements OnInit{

  @Output() onSelectDay = new EventEmitter<Day>();
  selectedDay:Day;
  months: string[] = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
  date: Date = new Date;
  syear: number;
  sdate: string;
  Days:Day[] = [];
  disabledDays: number[] = [7,9,22];
  today:string = this.date.getDate().toString();

  ngOnInit():void {
    this.date = new Date;
    this.syear = this.date.getFullYear()
    this.sdate = this.date.getDate().toString()+', '+this.months[this.date.getMonth()];
    this.createCalendar(this.date.getFullYear(),this.date.getMonth());
  }
  createCalendar(year, month):void {
      var enabled:boolean = true;
      var mon = month; 
      var d = new Date(year, mon);
      this.Days = [];
      for (var i = 0; i < this.getDay(d); i++) {
        this.Days.push({num:' ',enabled:true} as Day);
      }
      // ячейки календаря с датами
      while (d.getMonth() == mon) {
        enabled = true;
        this.disabledDays.map(
          (id)=>{
            if(d.getDate() == id){
              enabled = false;
            }
        });   
        this.Days.push({num:d.getDate(),enabled:enabled} as Day);
        /*for (var i = 0; i < this.disabledDays.length; i++) {
          if(d.getDate() == this.disabledDays[i]){
            this.Days.push({num:d.getDate(),enabled:false} as Day);
            break;
          }else{
            this.Days.push({num:d.getDate(),enabled:true} as Day);
            break;
          }
        }*/
        d.setDate(d.getDate() + 1);
      }
      // добить пустыми ячейками, если нужно
      if (this.getDay(d) != 0) {
        for (var i = this.getDay(d); i < 7; i++) {
            this.Days.push({num:' ',enabled:true} as Day);
        }
      }
    }
  getDay(date):number {
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }
  selectDay(day):void{
    if(day.enabled){
      this.selectedDay = day;
      this.onSelectDay.emit(day);
    }
  }
  next():void{
    this.date.setMonth(this.date.getMonth()+1);
    this.createCalendar(this.date.getFullYear(),this.date.getMonth());
  }
  prev():void{
    this.date.setMonth(this.date.getMonth()-1);
    this.createCalendar(this.date.getFullYear(),this.date.getMonth());
  }
}

