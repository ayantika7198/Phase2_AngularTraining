import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, concatWith, map, mergeMap, of } from "rxjs";
import { PlaceService } from "src/app/shared/place.service";
import * as PlaceActions from "./place.actions";

@Injectable()
export class PlaceEffects{
    constructor(private actions$:Actions, private placeService:PlaceService){}

    loadPlaces$= createEffect(()=>{
        //console.log(this.placeService.getPlaces());
        return this.actions$.pipe(
            ofType(PlaceActions.loadPlaces),
            mergeMap(()=>this.placeService.getPlaces().pipe(
                map(places=>PlaceActions.loadPlacesSuccess({ places })),
                catchError(error=>of(PlaceActions.loadPlacesFailure({ error })))
            ))
        );
    });

    updatePlace$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(PlaceActions.updatePlace),
            concatMap(action=> this.placeService.updatePlace(action.place).pipe(
                map(place=> PlaceActions.updatePlaceSuccess({ place })),
                catchError(error => of(PlaceActions.updatePlaceFailure({ error })))
            ))

        );
    });

    createPlace$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(PlaceActions.createPlace),
            concatMap(action=> this.placeService.createPlace(action.place).pipe(
            map(place=> PlaceActions.createPlaceSuccess({ place })),
            catchError(error=> of(PlaceActions.createPlaceFailure({ error })))
            
            ))
        );
    });

    deletePlace$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(PlaceActions.deletePlace),
            mergeMap(action=> this.placeService.deletePlace(action.placeId).pipe(
                map(()=> PlaceActions.deletePlaceSuccess({ placeId: action.placeId })),
                catchError(error=> of(PlaceActions.deletePlaceFailure({ error })))
            ))
        );
    });

}