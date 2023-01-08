import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PlaceService } from '../shared/place.service';
import { getCurrentPlace, getError, getPlaces } from '../state/places/place.selectors';
import { State } from '../state/places/place.state';
import { IPlace } from './place';
import * as PlaceActions from "../state/places/place.actions";

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit,OnDestroy{

  cont1:boolean=true;
  cont2:boolean=false;

  sub!:Subscription;
  plac!:IPlace;
  places:IPlace[]=[];
  pageTitle:string="List Of Places";
  href:string='';

  places$!:Observable<IPlace[]>;
  selectedPlace$!:Observable<any>;
  errorMessage$!: Observable<string>;

  constructor(private placeService:PlaceService, private router:Router, private store:Store<State>){}

  dataReceived=this.placeService.getPlaces();
  obsPlaces$!:Observable<IPlace[]>;


  ngOnInit(): void {
    this.href=this.router.url;

    this.places$= this.store.select(getPlaces);

    this.places$.subscribe(resp=>{console.log(resp); this.places=resp});

    this.errorMessage$=this.store.select(getError);

    this.store.dispatch(PlaceActions.loadPlaces());

    this.selectedPlace$=this.store.select(getCurrentPlace);

  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  newPlace():void{
    this.store.dispatch(PlaceActions.initializeCurrentPlace());
    this.router.navigate([this.href,'addPlace']);
  }

  placeSelected(place:IPlace):void{
    this.store.dispatch(PlaceActions.setCurrentPlace({currentPlaceId:place.id}));
    this.router.navigate([this.href,'editPlace']);
  }

  deletePlace(place:IPlace):void{

    if(place && place.id){
      if(confirm(`Are you sure to delete ${place.name} details`)){
        this.store.dispatch(PlaceActions.deletePlace({placeId:place.id}));
      }else{
        this.store.dispatch(PlaceActions.clearCurrentPlace());
      }
    }
  }

  show():void{

    this.cont1=false;
    this.cont2=true;

  }

  hide():void{

    this.cont1=true;
    this.cont2=false;

  }

}
