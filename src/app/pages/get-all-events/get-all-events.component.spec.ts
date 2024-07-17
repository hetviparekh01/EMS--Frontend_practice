import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEventsComponent } from './get-all-events.component';

describe('GetAllEventsComponent', () => {
  let component: GetAllEventsComponent;
  let fixture: ComponentFixture<GetAllEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllEventsComponent]
    });
    fixture = TestBed.createComponent(GetAllEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
