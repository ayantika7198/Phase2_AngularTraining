import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display PageTitle Correctly',()=>{


    fixture.detectChanges();
    
    const rootEle:DebugElement = fixture.debugElement;

    const h3 =rootEle.query(By.css('#msg'));

    const h3Element:HTMLElement= h3.nativeElement;
    expect(h3Element.textContent).toContain('Ayantika Datta');


  })

});