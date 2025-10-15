import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CguFrComponent } from './cgu-fr.component';

describe('CguFrComponent', () => {
  let component: CguFrComponent;
  let fixture: ComponentFixture<CguFrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CguFrComponent]
    });
    fixture = TestBed.createComponent(CguFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
