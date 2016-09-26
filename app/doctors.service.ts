import { Injectable } from '@angular/core';
import { Doctor } from './doctor';
import { DOCS } from './mdocs';
@Injectable()
export class DoctorsService {
  getDoctors(): Promise<Doctor[]> {
    return Promise.resolve(DOCS);
  }
}
