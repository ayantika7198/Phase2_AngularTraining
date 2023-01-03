import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlowerComponent } from './edit-flower.component';

describe('EditFlowerComponent', () => {
  let component: EditFlowerComponent;
  let fixture: ComponentFixture<EditFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
