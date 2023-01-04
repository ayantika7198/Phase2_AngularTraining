import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEvent } from "src/app/events/event";


@Injectable({
    providedIn: 'root'
})

export class EventService{
    url="api/events/";

    constructor(private http:HttpClient){}

    getEvents():Observable<IEvent[]>{
        return this.http.get<IEvent[]>(this.url);
    }
}