import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


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
    MatIconModule
  ],
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss']
})
export class RecommendationFormComponent {
  selectedEmployee = '';
  employees = ['Employee A', 'Employee B', 'Employee C'];

  recommendations = [
    { name: 'Employee 1', desc: 'Brief description here.' },
    { name: 'Employee 2', desc: 'Brief description here.' },
  ];
  recommend() {
    console.log('Recommend button clicked:', this.selectedEmployee);
  }
}
