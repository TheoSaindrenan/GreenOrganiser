import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvEnComponent } from './cgv-en.component';

describe('CgvEnComponent', () => {
  let component: CgvEnComponent;
  let fixture: ComponentFixture<CgvEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgvEnComponent]
    });
    fixture = TestBed.createComponent(CgvEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
