import { Component } from "@angular/core";

@Component({
    selector: 'card-list',
    template: `
        <card id="card1">
          <header #header>Heading 1</header>
          
          <footer #footer>Footer 1</footer>
        </card>
        <card id="card2">
        <header #header>Heading 2</header>
       
        <footer #footer>Footer 2</footer>
        </card>
        <card id="card3">
        <header #header>Heading 3</header>
        
        <footer #footer>Footer 3</footer>
        </card>
    `,
    styles:[
        ``
    ]
  })
  export class CardListComponent {
  
  }