import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RecommendationFormComponent } from './components/recommendation-form/recommendation-form.component';
import { RecommendationResultComponent } from './components/recommendation-result/recommendation-result.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'recommendation-form', component: RecommendationFormComponent },
    { path: 'recommendation-result', component: RecommendationResultComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
