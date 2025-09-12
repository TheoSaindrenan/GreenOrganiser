import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEnComponent } from './contact-en.component';

describe('ContactEnComponent', () => {
  let component: ContactEnComponent;
  let fixture: ComponentFixture<ContactEnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactEnComponent]
    });
    fixture = TestBed.createComponent(ContactEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
