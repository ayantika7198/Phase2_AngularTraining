import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppaboutComponent } from './appabout.component';

describe('AppaboutComponent', () => {
  let component: AppaboutComponent;
  let fixture: ComponentFixture<AppaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppaboutComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
