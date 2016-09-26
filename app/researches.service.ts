import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';

import { Research } from './research';
import { RESEARCHS } from './mresrchs';
@Injectable()
export class ResearchesService {
  getResearches(): Promise<Research[]> {
    return Promise.resolve(RESEARCHS);
  }
}
