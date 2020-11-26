import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prescription } from '../models/prescription';

const apiUrl = 'https://localhost:44365/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: HttpClient) { }

  get(referenceMimosa: string): Observable<Prescription> {

    console.log("From prescription service", referenceMimosa);

    return this.http.get<Prescription>(`${apiUrl}/${referenceMimosa}`);
  }
}
