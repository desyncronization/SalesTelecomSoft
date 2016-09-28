import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { DoctorsComponent }     from './doctors.component';
import { DoctorsService }       from './doctors.service'; 
import { ResearchesComponent }  from './researches.component';
import { ResearchesService }    from './researches.service'; 
import { DatepickComponent }    from './datepicker.component';
import { TimelineComponent }    from './timeline.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DoctorsComponent,
    ResearchesComponent,
    DatepickComponent,
    TimelineComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
  