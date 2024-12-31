import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NABHSelfAssessmentComponent } from './nabhself-assessment.component';

describe('NABHSelfAssessmentComponent', () => {
  let component: NABHSelfAssessmentComponent;
  let fixture: ComponentFixture<NABHSelfAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NABHSelfAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NABHSelfAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
