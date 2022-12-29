import { Component, Input } from '@angular/core';
import { IEvent } from './event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  @Input() event!:any;

  showDetails:boolean=false;

  show():void{
    this.showDetails=true;
  }

}
