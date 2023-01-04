import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlowerService } from 'src/app/shared/flower.service';
import { IFlower } from './flower';

import { FlowerListComponent } from './flower-list.component';

describe('FlowerListComponent', () => {
  let component: FlowerListComponent;
  let fixture: ComponentFixture<FlowerListComponent>;
  let element:HTMLElement;
  let flowerService:FlowerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerListComponent ],
      imports:[HttpClientTestingModule],
      schemas:[NO_ERRORS_SCHEMA],
      providers:[FlowerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerListComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
