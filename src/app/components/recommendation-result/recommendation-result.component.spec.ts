import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationResultComponent } from './recommendation-result.component';

describe('RecommendationResultComponent', () => {
  let component: RecommendationResultComponent;
  let fixture: ComponentFixture<RecommendationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
