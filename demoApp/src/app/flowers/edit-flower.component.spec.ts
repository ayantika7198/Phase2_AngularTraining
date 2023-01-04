import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditFlowerComponent } from './edit-flower.component';

describe('EditFlowerComponent', () => {
  let component: EditFlowerComponent;
  let fixture: ComponentFixture<EditFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlowerComponent ],
      imports:[FormsModule,ReactiveFormsModule, HttpClientTestingModule]
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
