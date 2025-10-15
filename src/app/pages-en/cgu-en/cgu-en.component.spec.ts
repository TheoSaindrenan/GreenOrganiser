import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CguEnComponent } from './cgu-en.component';

describe('CguEnComponent', () => {
  let component: CguEnComponent;
  let fixture: ComponentFixture<CguEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CguEnComponent]
    });
    fixture = TestBed.createComponent(CguEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
