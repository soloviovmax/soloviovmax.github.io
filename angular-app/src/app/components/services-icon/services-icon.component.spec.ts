import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesIconComponent } from './services-icon.component';

describe('ServicesIconComponent', () => {
  let component: ServicesIconComponent;
  let fixture: ComponentFixture<ServicesIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
