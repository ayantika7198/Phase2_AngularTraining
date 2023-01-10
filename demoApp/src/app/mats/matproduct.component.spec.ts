import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatproductComponent } from './matproduct.component';

describe('MatproductComponent', () => {
  let component: MatproductComponent;
  let fixture: ComponentFixture<MatproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
