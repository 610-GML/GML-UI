import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Branch {
  id: string;
  name: string;
}

interface MetadataResponse {
  branches: Branch[];
  project_types: string[];
  project_leaders: string[];
  status: string;
}

interface TeamRecommendationResponse {
  recommendations: any[];
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamRecommendationService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getMetadata(): Observable<MetadataResponse> {
    return this.http.get<MetadataResponse>(`${this.baseUrl}/metadata`);
  }

  getTeamRecommendations(branchId: string, projectType: string, numTeams: number): Observable<TeamRecommendationResponse> {
    return this.http.post<TeamRecommendationResponse>(`${this.baseUrl}/recommend`, {
      branch_id: branchId,
      project_type: projectType,
      num_teams: numTeams
    });
  }
}
