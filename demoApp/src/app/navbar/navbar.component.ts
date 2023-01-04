import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/shared/event.service';
import { IEvent } from '../events/event';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy{

  arr:string[]=[
    'Events',
    'All Events',
    'Create Event'
  ];

  sub!:Subscription;

  events:IEvent[]=[];

  constructor(private eventService:EventService){}
  ngOnInit(): void {
    this.sub=this.eventService.getEvents().subscribe(
      (response)=>{
        //console.log(response);
        this.events=response;
      },(err)=>{console.log(err);}
    )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  @Output() buttonClicked:EventEmitter<IEvent[]> =new EventEmitter<IEvent[]>();

  onClick():void{

    this.buttonClicked.emit(this.events);
  }

}
