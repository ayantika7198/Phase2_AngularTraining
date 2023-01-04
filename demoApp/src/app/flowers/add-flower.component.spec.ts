import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddFlowerComponent } from './add-flower.component';

describe('AddFlowerComponent', () => {
  let component: AddFlowerComponent;
  let fixture: ComponentFixture<AddFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlowerComponent ],
      imports:[FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the Flower ID',()=>{
    expect(fixture.debugElement.query(By.css('#id'))).toBeTruthy();
  });
  it('should have the Flower name',()=>{
    expect(fixture.debugElement.query(By.css('#name'))).toBeTruthy();
  });
  it('should have the Flower Place',()=>{
    expect(fixture.debugElement.query(By.css('#place'))).toBeTruthy();
  });
  it('should have the Flower Price',()=>{
    expect(fixture.debugElement.query(By.css('#price'))).toBeTruthy();
  });
  it('should have the Flower Image',()=>{
    expect(fixture.debugElement.query(By.css('#image'))).toBeTruthy();
  });
  it('should have the Flower Quantity',()=>{
    expect(fixture.debugElement.query(By.css('#quantity'))).toBeTruthy();
  });

  it('should check the input type of flower id',()=>{
    const id=fixture.debugElement.query(By.css('#id'));
    const id2=id.nativeElement.getAttribute('type');
    expect(id2).toEqual('text');
  });
  it('should check the input type of flower name',()=>{
    const name=fixture.debugElement.query(By.css('#name'));
    const name2=name.nativeElement.getAttribute('type');
    expect(name2).toEqual('text');
  });
  it('should check the input type of flower place',()=>{
    const place=fixture.debugElement.query(By.css('#place'));
    const place2=place.nativeElement.getAttribute('type');
    expect(place2).toEqual('text');
  });
  it('should check the input type of flower price',()=>{
    const price=fixture.debugElement.query(By.css('#price'));
    const price2=price.nativeElement.getAttribute('type');
    expect(price2).toEqual('number');
  });
  it('should check the input type of flower image',()=>{
    const image=fixture.debugElement.query(By.css('#image'));
    const image2=image.nativeElement.getAttribute('type');
    expect(image2).toEqual('text');
  });
  it('should check the input type of flower quantity',()=>{
    const quantity=fixture.debugElement.query(By.css('#quantity'));
    const quantity2=quantity.nativeElement.getAttribute('type');
    expect(quantity2).toEqual('number');
  });

  it('should check the input type of flower id',()=>{
    const id=fixture.debugElement.query(By.css('#id'));
    const id2=id.nativeElement.getAttribute('formControlName');
    expect(id2).toEqual('id');
  });
  it('should check the input type of flower name',()=>{
    const name=fixture.debugElement.query(By.css('#name'));
    const name2=name.nativeElement.getAttribute('formControlName');
    expect(name2).toEqual('name');
  });
  it('should check the input type of flower place',()=>{
    const place=fixture.debugElement.query(By.css('#place'));
    const place2=place.nativeElement.getAttribute('formControlName');
    expect(place2).toEqual('place');
  });
  it('should check the input type of flower price',()=>{
    const price=fixture.debugElement.query(By.css('#price'));
    const price2=price.nativeElement.getAttribute('formControlName');
    expect(price2).toEqual('price');
  });
  it('should check the input type of flower image',()=>{
    const image=fixture.debugElement.query(By.css('#image'));
    const image2=image.nativeElement.getAttribute('formControlName');
    expect(image2).toEqual('image');
  });
  it('should check the input type of flower quantity',()=>{
    const quantity=fixture.debugElement.query(By.css('#quantity'));
    const quantity2=quantity.nativeElement.getAttribute('formControlName');
    expect(quantity2).toEqual('quantity');
  });

});
