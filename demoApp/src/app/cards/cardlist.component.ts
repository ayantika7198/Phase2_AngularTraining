import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

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
  export class CardListComponent implements OnInit{

    constructor(private http:HttpClient){}

  ngOnInit(): void {
    const obs1= new Observable((data)=>data.next(Math.random()));

    obs1.subscribe(d=>console.log(d));

    obs1.subscribe(d=>console.log(d));

    const subject=new Subject();

    subject.subscribe(d=>console.log(d));
    subject.subscribe(d=>console.log(d));

    subject.next(Math.random());

    const subject1=new Subject();

    const data=this.http.get("/api/products");

    data.subscribe(d=>console.log(d));
    data.subscribe(d=>console.log(d));

    const result=data.subscribe(subject1);
  }
  
  }