import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`);
  }  

  getRecommendations(employeeId: number) {
    return this.http.post<{ recommendations: any[] }>(`${this.baseUrl}/employee/recommendations`, {
      employee_id: employeeId
    });
  }
  
}
