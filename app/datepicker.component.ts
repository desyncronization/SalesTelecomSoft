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
  currentMonth:number;
  currentYear:number;
  isMonthCurrent:boolean = true;

  ngOnInit():void {
    this.date = new Date;
    this.syear = this.date.getFullYear()
    this.sdate = this.months[this.date.getMonth()];
    this.currentMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
    this.createCalendar( this.date.getFullYear(),this.date.getMonth() );
  }
  createCalendar(year, month):void {
      var enabled:boolean = true;
      var mon = month; 
      var d = new Date(year, mon);
      this.Days = [];
      this.syear = this.date.getFullYear()
      this.sdate = this.months[this.date.getMonth()];
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
    if(day.enabled && day.num != ' '){
      this.selectedDay = day;
      this.onSelectDay.emit(day);
    }
  }
  next():void{
    if(this.date.getMonth()+1==this.currentMonth) {
      this.isMonthCurrent=true
    }else{
      this.isMonthCurrent=false
    }
    this.date.setMonth(this.date.getMonth()+1);
    this.createCalendar(this.date.getFullYear(),this.date.getMonth());
    console.log(this.currentMonth);
    console.log(this.date.getMonth());
    console.log(this.isMonthCurrent);
    console.log('-');
  }
  prev():void{
    if( (this.date.getMonth()-1 >= this.currentMonth && this.date.getFullYear() == this.currentYear)
     || (this.currentYear < this.date.getFullYear())
       ) {
      if(this.date.getMonth()-1==this.currentMonth) {
        this.isMonthCurrent=true
      }else{
        this.isMonthCurrent=false
      }
      this.date.setMonth(this.date.getMonth()-1);
      this.createCalendar(this.date.getFullYear(),this.date.getMonth());
    }
    console.log(this.currentMonth);
    console.log(this.date.getMonth());console.log(this.isMonthCurrent);
    console.log('-');
  }
}

