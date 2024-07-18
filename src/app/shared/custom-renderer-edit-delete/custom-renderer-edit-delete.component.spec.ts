import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRendererEditDeleteComponent } from './custom-renderer-edit-delete.component';

describe('CustomRendererEditDeleteComponent', () => {
  let component: CustomRendererEditDeleteComponent;
  let fixture: ComponentFixture<CustomRendererEditDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomRendererEditDeleteComponent]
    });
    fixture = TestBed.createComponent(CustomRendererEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
