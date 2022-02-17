import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Freelancer } from 'app/models/freelancer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3003/api/freelancer';

  getFreelancers(): Observable<any> {
    return this.http.get<Freelancer[]>(`${this.API_URI}/findAll`)
  }


}
