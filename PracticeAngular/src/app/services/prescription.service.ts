import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://localhost:44365/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http: HttpClient) { }

  get(referenceMimosa: any): Observable<any> {
    return this.http.get(`${apiUrl}/${referenceMimosa}`);
  }
}
