import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, tap } from 'rxjs';
import { IPlace } from './place';
import * as PlaceActions from "../state/places/place.actions";
import { State } from '../state/places/place.state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductService } from '../shared/productService';
import { getCurrentPlace } from '../state/places/place.selectors';

@Component({
  selector: 'app-place-edit',
  templateUrl: './place-edit.component.html',
  styleUrls: ['./place-edit.component.css']
})
export class PlaceEditComponent implements OnInit,OnDestroy{

  pageTitle:string="EDIT";
  errorMessage='';
  place$!: Observable<IPlace | null | undefined>;

  addPlace!: FormGroup;
  place!:IPlace | null |undefined;
  sub!:Subscription;

  constructor(private store:Store<State>,private formBuilder: FormBuilder,private router: Router, private productService:ProductService ){}

  ngOnInit(): void {

    this.addPlace= this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      imageUrl:['',[Validators.required]],
      seats:[0,[Validators.required, Validators.min(0), Validators.max(100)]],
      days:[0,[Validators.required, Validators.min(0), Validators.max(30)]],
      price:[0,[Validators.required, Validators.min(0), Validators.max(50000)]],
      famous:['',[Validators.required]]
    });

    this.place$= this.store.select(getCurrentPlace).pipe(
      tap(currentPlace => this.displayPlace(currentPlace))
    );

    this.place$.subscribe(resp=> this.place=resp);
    
  }

  get id(){
    return this.addPlace.get("id");
  }

  get name(){
    return this.addPlace.get("name");
  }

  get imageUrl(){
    return this.addPlace.get("imageUrl");
  }

  get seats(){
    return this.addPlace.get("seats");
  }

  get days(){
    return this.addPlace.get("days");
  }

  get price(){
    return this.addPlace.get("price");
  }

  get famous(){
    return this.addPlace.get("famous");
  }

  displayPlace(placeParam:IPlace | null | undefined ):void{
    this.place=placeParam;

    if(this.place){

      this.addPlace.reset();

      this.pageTitle=`Edit ${this.place.name} Details`;

      this.addPlace.patchValue({
        id:this.place.id,
        name:this.place.name,
        imageUrl:this.place.imageUrl,
        seats:this.place.seats,
        days:this.place.days,
        price:this.place.price,
        famous:this.place.famous
      })
    }
  }

  savePlace(originalPlace : IPlace | undefined | null):void{

    if(this.addPlace.valid){
      if(this.addPlace.dirty){

        const place={...originalPlace,...this.addPlace.value};

        this.store.dispatch(PlaceActions.updatePlace({place}));
      }

      this.router.navigate(['tour']);
    }
  }


  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

}
