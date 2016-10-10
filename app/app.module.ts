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
import { InfoformComponent }    from './infoform.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule//,    Ng2PopupModule
  ],
  declarations: [
    AppComponent,
    DoctorsComponent,
    ResearchesComponent,
    DatepickComponent,
    TimelineComponent,
    InfoformComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
  