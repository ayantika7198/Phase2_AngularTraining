import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as AppState from "../app.state";
import { PlaceState } from "./place.state";

const getPlaceFeatureState= createFeatureSelector<PlaceState>('places');

export const getCurrentPlaceId= createSelector(
    getPlaceFeatureState,
    state=>state.currentPlaceId
);

export const getCurrentPlace=createSelector(
    getPlaceFeatureState,
    getCurrentPlaceId,
    (state, currentPlaceId)=>{
        if(currentPlaceId==='T000'){
            return {
                id: '',
                name : '',
                imageUrl: '',
                seats:0,
                price:0,
                days:0,
                famous:''

            };
        }else{
            return currentPlaceId? state.places.find(p=>p.id===currentPlaceId):null;
        }
    }
);

export const getPlaces= createSelector(
    getPlaceFeatureState,
    state=> state.places
);

export const getError= createSelector(
    getPlaceFeatureState,
    state=>state.error
);
