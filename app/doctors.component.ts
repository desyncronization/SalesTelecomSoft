import { Component,OnInit,EventEmitter,Output }  from '@angular/core';

import { DoctorsService}  from './doctors.service';
import { Doctor } from './doctor';

@Component({
  selector: 'doctors',
  templateUrl: 'app/doctors.component.html',
  providers: [DoctorsService]
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];
  selectedDoc:Doctor;
  @Output() onSelectDoc = new EventEmitter<Doctor>();

  constructor(private docService: DoctorsService) { }

  ngOnInit(): void {
    this.docService.getDoctors()
      .then(doctors => this.doctors = doctors)
      .then(doctors=>this.selectedDoc = doctors[0]);
  }

  selectDoc(doc: Doctor): void {
    this.onSelectDoc.emit(doc);
    this.selectedDoc = doc;
  }
}
