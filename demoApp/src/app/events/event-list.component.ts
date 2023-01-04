import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { IEvent } from './event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit,OnDestroy{

  sub!:Subscription;

  events:IEvent[]=[];

  constructor(private eventService:EventService){}
  ngOnInit(): void {
    this.sub=this.eventService.getEvents().subscribe(
      (response)=>{
        
        this.events=response;
        
      },(err)=>{console.log(err);}
    )

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



}
