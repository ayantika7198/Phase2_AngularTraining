import { animate, state, style, transition, trigger } from '@angular/animations';
import { I18nPluralPipe } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { IEvent } from './event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  animations:[
    trigger('change',[
      state('start',style({
        width:'100px' , height:'100px', backgroundColor:'purple'
       })),
       state('end',style({
        height:'200px',width:'200px', backgroundColor: 'pink'
      })),
      transition('start=>end',[
        animate('1s 2s')
      ]),
      transition('end=>start',[
        animate('1s 2s')
      ])

    ])
  ]
})
export class EventListComponent implements OnInit,OnDestroy{

  isClick:boolean[]=[false];
  cont:boolean=false;

  startDate = new Date(2023, 0, 1);

  addEvent!:FormGroup;

  sub!:Subscription;

  events:IEvent[]=[];

  constructor(private eventService:EventService, private formBuilder: FormBuilder){}
  ngOnInit(): void {

    this.addEvent=this.formBuilder.group({
      id: ['',[Validators.required]],
      name: ['',[Validators.required]],
      date: ['2023-01-01',[Validators.required]],
      venue: ['',[Validators.required]],
      sess:['',[Validators.required]]
    })
    this.sub=this.eventService.getEvents().subscribe(
      (response)=>{
        
        this.events=response;
        
      },(err)=>{console.log(err);}
    )

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  show():void{
    this.cont=true;
  }

  applyAnimation(i:number){
    this.isClick[i]=!this.isClick[i];

 }



}
