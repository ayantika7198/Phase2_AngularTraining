import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from 'src/material.module';

import { AddFlowerComponent } from './add-flower.component';

describe('AddFlowerComponent', () => {
  let component: AddFlowerComponent;
  let fixture: ComponentFixture<AddFlowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlowerComponent ],
      imports:[FormsModule, ReactiveFormsModule, HttpClientTestingModule , MaterialExampleModule, BrowserAnimationsModule]
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
    expect(fixture.debugElement.query(By.css('.id'))).toBeTruthy();
  });
  it('should have the Flower name',()=>{
    expect(fixture.debugElement.query(By.css('.name'))).toBeTruthy();
  });
  it('should have the Flower Place',()=>{
    expect(fixture.debugElement.query(By.css('.place'))).toBeTruthy();
  });
  it('should have the Flower Price',()=>{
    expect(fixture.debugElement.query(By.css('.price'))).toBeTruthy();
  });
  it('should have the Flower Image',()=>{
    expect(fixture.debugElement.query(By.css('.image'))).toBeTruthy();
  });
  it('should have the Flower Quantity',()=>{
    expect(fixture.debugElement.query(By.css('.quantity'))).toBeTruthy();
  });

  it('should check the input type of flower id',()=>{
    const id3=fixture.debugElement.query(By.css('.id'));

    const id:any=component.addFlower.get("id");
    const id2='F003';
    id.setValue(id2);

    fixture.detectChanges();

    expect(id3.nativeElement.value).toEqual(id2);


  });
  it('should check the input type of flower name',()=>{
    const name3=fixture.debugElement.query(By.css('.name'));

    const name:any=component.addFlower.get("name");
    const name2='NewRose';
    name.setValue(name2);

    fixture.detectChanges();

    expect(name3.nativeElement.value).toEqual(name2);
  });
  it('should check the input type of flower place',()=>{
    const place3=fixture.debugElement.query(By.css('.place'));

    const place:any=component.addFlower.get("place");
    const place2='Kolkata';
    place.setValue(place2);

    fixture.detectChanges();

    expect(place3.nativeElement.value).toEqual(place2);
  });
  it('should check the input type of flower price',()=>{
    const price3=fixture.debugElement.query(By.css('.price'));

    const price:any=component.addFlower.get("price");
    const price2=500;
    price.setValue(price2);

    fixture.detectChanges();

    expect(parseInt(price3.nativeElement.value)).toEqual(price2);
  });
  it('should check the input type of flower image',()=>{
    const image3=fixture.debugElement.query(By.css('.image'));

    const image:any=component.addFlower.get("image");
    const image2='../url';
    image.setValue(image2);

    fixture.detectChanges();

    expect(image3.nativeElement.value).toEqual(image2);
  });
  it('should check the input type of flower quantity',()=>{
    const quantity3=fixture.debugElement.query(By.css('.quantity'));

    const quantity:any=component.addFlower.get("quantity");
    const quantity2=50;
    quantity.setValue(quantity2);

    fixture.detectChanges();

    expect(parseInt(quantity3.nativeElement.value)).toEqual(quantity2);
  });

  it('should check the form control name of flower id',()=>{
    const id=fixture.debugElement.query(By.css('.id'));
    const id2=id.nativeElement.getAttribute('formControlName');
    expect(id2).toEqual('id');
  });
  it('should check the form control name of flower name',()=>{
    const name=fixture.debugElement.query(By.css('.name'));
    const name2=name.nativeElement.getAttribute('formControlName');
    expect(name2).toEqual('name');
  });
  it('should check the form control name of flower place',()=>{
    const place=fixture.debugElement.query(By.css('.place'));
    const place2=place.nativeElement.getAttribute('formControlName');
    expect(place2).toEqual('place');
  });
  it('should check the form control name of flower price',()=>{
    const price=fixture.debugElement.query(By.css('.price'));
    const price2=price.nativeElement.getAttribute('formControlName');
    expect(price2).toEqual('price');
  });
  it('should check the form control name of flower image',()=>{
    const image=fixture.debugElement.query(By.css('.image'));
    const image2=image.nativeElement.getAttribute('formControlName');
    expect(image2).toEqual('image');
  });
  it('should check the form control name of flower quantity',()=>{
    const quantity=fixture.debugElement.query(By.css('.quantity'));
    const quantity2=quantity.nativeElement.getAttribute('formControlName');
    expect(quantity2).toEqual('quantity');
  });

  it('should check the save button when valid',()=>{
    const id:any=component.addFlower.get("id");
    const id2='F003';
    id.setValue(id2);

    const name:any=component.addFlower.get("name");
    const name2='NewRose';
    name.setValue(name2);

    const place:any=component.addFlower.get("place");
    const place2='Kolkata';
    place.setValue(place2);

    const price:any=component.addFlower.get("price");
    const price2=500;
    price.setValue(price2);

    const image:any=component.addFlower.get("image");
    const image2='../url';
    image.setValue(image2);

    const quantity:any=component.addFlower.get("quantity");
    const quantity2=50;
    quantity.setValue(quantity2);

    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeFalsy();
  });

  it('should check the save button when Invalid',()=>{
    const id:any=component.addFlower.get("id");
    const id2='F003';
    id.setValue(id2);

    const name:any=component.addFlower.get("name");
    const name2='NewRose';
    name.setValue(name2);

    const place:any=component.addFlower.get("place");
    const place2='Kolkata';
    place.setValue(place2);

    const price:any=component.addFlower.get("price");
    const price2=30001;
    price.setValue(price2);

    const image:any=component.addFlower.get("image");
    const image2='../url';
    image.setValue(image2);

    const quantity:any=component.addFlower.get("quantity");
    const quantity2=50;
    quantity.setValue(quantity2);

    fixture.detectChanges();

    const btn=fixture.debugElement.query(By.css('#btn1'));
    expect(btn.nativeElement.disabled).toBeTruthy();
  });

});
