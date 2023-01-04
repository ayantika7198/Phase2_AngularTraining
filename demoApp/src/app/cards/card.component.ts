import { Component, ContentChild, ElementRef, ViewChild, Renderer2 } from "@angular/core";

@Component({
    selector: 'card',
    template: `
      <div class="card">
        <ng-content select="header"></ng-content>
        
        <ng-content select="footer"></ng-content>
           </div>
    `,
    styles: [
      ` .card {  margin: auto; margin-top:10px; background-color: pink; border:none; border-radius:10px; width:60%; text-align:center; padding:10px; font-size:20px; color:purple; }
      `
    ]
  })
  export class CardComponent {
  
    @ContentChild("header") cardContentHeader!: ElementRef;
    @ViewChild("header") cardViewHeader!: ElementRef;
  

    @ContentChild("footer") footerContent!: ElementRef;
    @ViewChild("footer") footerView!: ElementRef;
  
  
    constructor(private renderor:Renderer2) {
      console.log("CardComponent ->constructor "+this.cardContentHeader)
    }
  
    ngOnChanges() {
      
      console.log("CardComponent ->ngOnChanges "+this.cardContentHeader)
    }
  
    ngOnInit() {
    
      console.log("CardComponent ->ngOnInit "+this.cardContentHeader);
      //this.renderor.setStyle(this.footerContent.nativeElement,"background-color","skyblue")
    }
  
    ngDoCheck() {
      
      console.log("CardComponent ->ngDoCheck "+this.cardContentHeader)
    }
  
    ngAfterContentInit() {
      
      console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)
  
      this.renderor.setStyle(this.cardContentHeader.nativeElement,"background-color","yellow");
      this.renderor.setStyle(this.footerContent.nativeElement,"background-color","skyblue")
  
      
    }
  
    ngAfterContentChecked() {
      
      console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)
    }
  
    ngAfterViewInit() {
      console.log("CardComponent ->ngAfterViewInit-viewHeader "+this.cardViewHeader)
    }
  
    ngAfterViewChecked() {
      console.log("CardComponent ->ngAfterViewChecked-viewHeader "+this.cardViewHeader)
    }
  
  
  
  
  }