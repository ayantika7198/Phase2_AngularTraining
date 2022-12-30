import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let element:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take form heading correctly',()=>{
    component.heading='Book Form';

    fixture.detectChanges();




  }
  )
});
