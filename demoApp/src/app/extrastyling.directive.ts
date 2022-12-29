import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[extrastyling]'
})
export class ExtrastylingDirective implements OnInit{

  constructor(private elm:ElementRef) { }
  ngOnInit(): void {
    this.elm.nativeElement.textContent+= 'green';
  }



}
