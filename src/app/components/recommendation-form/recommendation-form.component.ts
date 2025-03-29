import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-recommendation-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss']
})
export class RecommendationFormComponent implements OnInit {
  selectedEmployeeId: number = 0;
  employees: any[] = [];
  recommendations: any[] = [];

  constructor(private recommendationService: RecommendationService) {}

  ngOnInit(): void {
    this.recommendationService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data.employees || [];
      },
      error: (err) => {
        console.error('Failed to load employees:', err);
      }
    });
  }

  getRecommendations(): void {
    if (!this.selectedEmployeeId) {
      console.warn('No employee selected');
      return;
    }

    this.recommendationService.getRecommendations(this.selectedEmployeeId).subscribe({
      next: (res) => {
        this.recommendations = res.recommendations || [];
      },
      error: (err) => {
        console.error('Recommendation failed:', err);
      }
    });
  }
}
