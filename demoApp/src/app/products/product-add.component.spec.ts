import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MaterialExampleModule } from 'src/material.module';

import { ProductAddComponent } from './product-add.component';

describe('ProductAddComponent', () => {
  let component: ProductAddComponent;
  let fixture: ComponentFixture<ProductAddComponent>;
  let element!: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddComponent ],
      imports:[FormsModule,HttpClientTestingModule,ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAddComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the product name',()=>{
    expect(fixture.debugElement.query(By.css('#name'))).toBeTruthy();
  });
  it('should have the product price',()=>{
    expect(fixture.debugElement.query(By.css('#price'))).toBeTruthy();
  });
  it('should have the product category',()=>{
    expect(fixture.debugElement.query(By.css('#category'))).toBeTruthy();
  });
  it('should have the product image',()=>{
    expect(fixture.debugElement.query(By.css('#image'))).toBeTruthy();
  });
  it('should have the product rating',()=>{
    expect(fixture.debugElement.query(By.css('#rating'))).toBeTruthy();
  });
});
