import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRegisteredeventComponent } from './get-registeredevent.component';

describe('GetRegisteredeventComponent', () => {
  let component: GetRegisteredeventComponent;
  let fixture: ComponentFixture<GetRegisteredeventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetRegisteredeventComponent]
    });
    fixture = TestBed.createComponent(GetRegisteredeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
