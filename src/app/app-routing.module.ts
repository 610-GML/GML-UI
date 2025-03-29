import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RecommendationFormComponent } from './components/recommendation-form/recommendation-form.component';
import { RecommendationResultComponent } from './components/recommendation-result/recommendation-result.component';
import { TeamRecommendationComponent } from './components/team-recommendation/team-recommendation.component';  

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'recommendation-form', component: RecommendationFormComponent },
    { path: 'recommendation-result', component: RecommendationResultComponent },
    { path: 'team-recommendation', component: TeamRecommendationComponent }, 
    { path: '', redirectTo: '/team-recommendation', pathMatch: 'full' },  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
