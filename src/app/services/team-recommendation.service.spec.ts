import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamRecommendationService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  // Fetch metadata for dropdowns
  getMetadata(): Observable<any> {
    return this.http.get(`${this.apiUrl}/metadata`);
  }

  // Get team recommendations
  getTeamRecommendations(branchId: string, projectType: string, numTeams: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/recommend`, { 
      branch_id: branchId, 
      project_type: projectType,
      num_teams: numTeams 
    });
  }
}