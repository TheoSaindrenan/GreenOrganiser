import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgvFrComponent } from './cgv-fr.component';

describe('CgvFrComponent', () => {
  let component: CgvFrComponent;
  let fixture: ComponentFixture<CgvFrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CgvFrComponent]
    });
    fixture = TestBed.createComponent(CgvFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
