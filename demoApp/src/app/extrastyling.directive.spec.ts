import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtrastylingDirective } from './extrastyling.directive';


@Component({
  template: `<div id="div1" extrastyling>Test</div>`,
})
class HostComponent {}

@NgModule({
  declarations: [HostComponent, ExtrastylingDirective],
  exports: [HostComponent],
})
class HostModule {}

describe('ExtrastylingDirective', () => {

  let component: HostComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<HostComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HostModule],
      declarations:[ExtrastylingDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges(); 
  });

  
  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should add green', () => {
    
    const el = element.querySelector('#div1')?.textContent;
    
    expect(el).toEqual('Testgreen'); 
  });
});
