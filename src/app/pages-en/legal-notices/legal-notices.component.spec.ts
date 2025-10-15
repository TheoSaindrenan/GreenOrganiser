import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticesComponent } from './legal-notices.component';

describe('LegalNoticesComponent', () => {
  let component: LegalNoticesComponent;
  let fixture: ComponentFixture<LegalNoticesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalNoticesComponent]
    });
    fixture = TestBed.createComponent(LegalNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
