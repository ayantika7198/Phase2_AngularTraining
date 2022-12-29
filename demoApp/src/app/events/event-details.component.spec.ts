import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsComponent } from './event-details.component';

describe('EventDetailsComponent', () => {
  let component: EventDetailsComponent;
  let fixture: ComponentFixture<EventDetailsComponent>;
  let element:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailsComponent);
    component = fixture.componentInstance;
    element=fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render the @Input value',()=>{
    component.event=
     {
      "id": "E02",
       "name": "Angular Upgrades",
      "date": "3/24/2023",
      "time": "08:30 pm",
      "price": 1000,
      "imageUrl": "/assets/images/angularconnect-shield.png",
      "location":{
        "address": "1057  DT Street , ML Auditorium",
        "city": "Mumbai",
        "country": "India"
      },
      "sessions": [
        {
          "id": "S01",
          "name": "Using Angular 4 Pipes",
          "presenter": "Peter  Darwin",
          "duration": "2 hrs",
          "level": "Intermediate",
          "voters": [
              "bradgreen",
               "igorminar",
                "martinfowler"
              ]
          }]




    }

    let event1 =  component.event;

    fixture.detectChanges();
    let val = element.querySelector("#data")?.textContent??'hello';

    expect(JSON.parse(val)).toEqual(JSON.parse(JSON.stringify(event1)));



  }
    );
});
