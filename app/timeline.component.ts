import { Component,OnInit,Input,OnChanges,ViewChild }  from '@angular/core';
import { Day }  from './day';
import { timetableItem,min }  from './timetableRef';
//import { Ng2MessagePopupComponent, Ng2PopupComponent} from 'ng2-popup';

@Component({
  selector:'timeline',
  templateUrl:'app/timeline.component.html',
  styleUrls:['app/timeline.component.css']
})
export class TimelineComponent implements OnInit,OnChanges {
  //@ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
  @Input() selDay:Day;
  htm:string;
  mins:number;
  timeline:min[] = [];
  ngOnInit():void{
    this.drawTimeline(8,45,22,15);
  }
  ngOnChanges(changes: any) {
    console.log(changes.selDay);
  }
  minclick(m):void{
    console.log(m.time)
  }
  drawTimeline(sh:number,sm:number,eh:number,em:number):void{
    var h:number = sh;
    var m:number = sm;
    if(sm>=em) {
      this.mins = (eh-sh)*12 + (sm-em)/5;
    }else{
      this.mins = (eh-sh-1)*12 + (em-sm)/5;
    }
      for (var i = 0; i<this.mins; i++) {
        if(h==eh && m == em) {
          break;
        }
        if(m==0) {
          this.timeline.push({time:[h,m],hour:(m==0)} as min);
        }else{
          this.timeline.push({time:[h,m],hour:(m==0)} as min);
        }   
        if(m+5 == 60){
          h++;
          m = 0;
        }else m+=5;
        
      }
  }
  
}