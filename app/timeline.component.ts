import { Component,OnInit,Input }  from '@angular/core';
import { Day }  from './day';

@Component({
  selector:'timeline',
  template:`
    <h2 ng-if="selDay">{{selDay.num}}<h2>
  `
})
export class TimelineComponent implements OnInit {
  @Input() selDay:Day;
  ngOnInit():void{
   this.selDay = {num:'1',enabled:true} as Day;
  }
}