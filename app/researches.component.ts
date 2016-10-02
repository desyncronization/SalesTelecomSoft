import { Component,OnInit,EventEmitter,Output }  from '@angular/core';

import { ResearchesService }  from './researches.service';
import { Research }  from './research';

@Component({
  selector: 'researches',
  templateUrl: 'app/researches.component.html',
  providers: [ResearchesService]
})
export class ResearchesComponent implements OnInit {
  researches: Research[] = [];
  selectedRes: Research;
  @Output() onSelectRes = new EventEmitter<Research>()
  constructor(private resService: ResearchesService) { }



  ngOnInit(): void {
    this.resService.getResearches()
    .then(researches => this.researches = researches)
    .then(researches => this.selectedRes = researches[0]);
  }
  onSelect(res):void {
    this.selectedRes = res;
    this.onSelectRes.emit(res);
  }
}