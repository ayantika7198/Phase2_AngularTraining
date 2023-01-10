import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatuserComponent } from './matuser.component';

describe('MatuserComponent', () => {
  let component: MatuserComponent;
  let fixture: ComponentFixture<MatuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
