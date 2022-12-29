import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RepeatDataPipe } from '../repeat-data.pipe';
import { TransformDataPipe } from '../transform-data.pipe';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent, RepeatDataPipe, TransformDataPipe],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display data as 10',()=>{
 
    component.num =10;
    fixture.detectChanges();

    
    const rootEle:DebugElement = fixture.debugElement;
    
    const h1 =rootEle.query(By.css('#msg'));

    const h1Element:HTMLElement= h1.nativeElement;

    expect(h1Element.textContent).toContain('10');

  })

  it('should display Ayantika',()=>{

    component.name='AyantikaDemo';

    fixture.detectChanges();

    
    const rootEle:DebugElement = fixture.debugElement;

    const h2 =rootEle.query(By.css('#msg2'));

    const h2Element:HTMLElement= h2.nativeElement;
    expect(h2Element.textContent).toContain('AyantikaDemo');


  })
});