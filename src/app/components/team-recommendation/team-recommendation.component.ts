import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamRecommendationService } from '../../services/team-recommendation.service';

interface TeamMember {
  employee_id: number;
  employee_name: string;
  employee_title: string;
}

interface TeamRecommendation {
  team_members: TeamMember[];
  predicted_score: number;
  project_type_probability: number;
  combined_score: number;
}

interface Branch {
  id: string;
  name: string;
}

@Component({
  selector: 'app-team-recommendation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './team-recommendation.component.html',
  styleUrl: './team-recommendation.component.scss'
})
export class TeamRecommendationComponent implements OnInit {
  recommendationForm: FormGroup;
  branches: Branch[] = [];
  projectTypes: string[] = [];
  teamRecommendations: TeamRecommendation[] = [];
  loading = false;
  error = '';
  
  constructor(
    private fb: FormBuilder,
    private teamRecommendationService: TeamRecommendationService
  ) {
    this.recommendationForm = this.fb.group({
      branchId: ['', Validators.required],
      projectType: ['', Validators.required],
      numTeams: [3, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  ngOnInit() {
    this.loadMetadata();
  }

  loadMetadata() {
    this.loading = true;
    this.error = '';
    
    this.teamRecommendationService.getMetadata().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.branches = response.branches || [];
          this.projectTypes = response.project_types || [];
        } else {
          this.error = 'Failed to load metadata. Please try again.';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching metadata:', err);
        this.error = 'Failed to load dropdown options. Please try again.';
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.recommendationForm.valid) {
      const { branchId, projectType, numTeams } = this.recommendationForm.value;
      this.loading = true;
      this.error = '';
      
      this.teamRecommendationService.getTeamRecommendations(branchId, projectType, numTeams).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.teamRecommendations = response.recommendations || [];
          } else {
            this.error = 'Failed to get recommendations. Please try again.';
          }
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching recommendations:', err);
          this.error = 'Failed to get team recommendations. Please try again.';
          this.loading = false;
        }
      });
    }
  }
}