import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditcomponentComponent } from './auditcomponent.component';

describe('AuditcomponentComponent', () => {
  let component: AuditcomponentComponent;
  let fixture: ComponentFixture<AuditcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
