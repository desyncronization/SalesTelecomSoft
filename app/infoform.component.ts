import { Component, Input }  from '@angular/core';

import { Day }      from './day';
import { Doctor }   from './doctor';
import { Research } from './research';

@Component({
  selector:'info-form',
  template:
  `
    {{day.num}};{{day.enabled}}<br><hr>
    {{res.pk}}<br><hr>
    {{doc.pk}}<br><hr>
  `
})
export class InfoformComponent {
  @Input()day: Day;
  @Input()res: Research;
  @Input()doc: Doctor;
}