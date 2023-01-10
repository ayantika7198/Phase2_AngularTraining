import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatmanagerComponent } from './matmanager.component';

describe('MatmanagerComponent', () => {
  let component: MatmanagerComponent;
  let fixture: ComponentFixture<MatmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
