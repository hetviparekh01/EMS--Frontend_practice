import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRegistereventComponent } from './all-registerevent.component';

describe('AllRegistereventComponent', () => {
  let component: AllRegistereventComponent;
  let fixture: ComponentFixture<AllRegistereventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRegistereventComponent]
    });
    fixture = TestBed.createComponent(AllRegistereventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
