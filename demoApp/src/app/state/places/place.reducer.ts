import { createReducer, on } from "@ngrx/store";
import * as PlaceActions from "./place.actions";
import { initialState, PlaceState } from "./place.state";

export const placeReducer= createReducer<PlaceState>(
    initialState,

    on(PlaceActions.setCurrentPlace, (state,action): PlaceState =>{
        return {
            ...state,
            currentPlaceId:action.currentPlaceId
        };
    }),

    on(PlaceActions.clearCurrentPlace, (state):PlaceState=>{
        return {
            ...state,
            currentPlaceId: null
        };
    }),

    on(PlaceActions.initializeCurrentPlace, (state):PlaceState=>{
        return {
            ...state,
            currentPlaceId: 'T000'
        };
    }),

    on(PlaceActions.loadPlacesSuccess, (state, action):PlaceState=>{
        return {
            ...state,
            places:[],
            error: ''
        };
    }),

    on(PlaceActions.loadPlacesFailure, (state,action):PlaceState=>{
        return {
            ...state,
            places:[],
            error: action.error
        };
    }),

    on(PlaceActions.updatePlaceSuccess, (state,action):PlaceState=>{
        const updatedPlaces= state.places.map(item=> action.place.id===item.id ? action.place: item);

        return {
            ...state,
            places: updatedPlaces,
            currentPlaceId: action.place.id,
            error:''
        };
    }),

    on(PlaceActions.updatePlaceFailure, (state, action):PlaceState=>{
        return {
            ...state,
            error: action.error
        };
    }),

    on(PlaceActions.createPlaceSuccess, (state,action):PlaceState=>{
        return {
            ...state,
            places: [...state.places, action.place],
            currentPlaceId: action.place.id,
            error:''
        };
    }),

    on(PlaceActions.updatePlaceFailure, (state,action):PlaceState=>{
        return {
            ...state,
            error:''
        };
    }),

    on(PlaceActions.deletePlaceSuccess, (state,action):PlaceState=>{
        return {
            ...state,
            places: state.places.filter(place=> place.id != action.placeId),
            currentPlaceId: null,
            error:''
        };
    }),

    on(PlaceActions.deletePlaceFailure, (state,action):PlaceState=>{
        return {
            ...state,
            error:action.error
        };
    })


);