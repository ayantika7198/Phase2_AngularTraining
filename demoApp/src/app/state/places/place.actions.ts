import { createAction, props } from "@ngrx/store";
import { IPlace } from "src/app/tourism/place";

export const setCurrentPlace= createAction(
    '[Place] Set Current Place',
    props<{ currentPlaceId: string }>()
);

export const clearCurrentPlace= createAction(
    '[Place] Clear Current Place'
);

export const initializeCurrentPlace= createAction(
    '[Place] Initialize Current Place'
);

export const loadPlaces=createAction(
    '[Place] Load'
);

export const loadPlacesSuccess=createAction(
    '[Place] Load Success',
    props<{ places:IPlace[] }>()
);

export const loadPlacesFailure=createAction(
    '[Place] Load Fail',
    props<{ error:string }>()
);

export const updatePlace=createAction(
    '[Place] Update Place',
    props<{ place:IPlace }>()
);

export const updatePlaceSuccess=createAction(
    '[Place] Update Place Success',
    props<{ place:IPlace }>()
);

export const updatePlaceFailure=createAction(
    '[Place] Update Place Fail',
    props<{ error:string }>()
);

export const createPlace=createAction(
    '[Place] Create Place',
    props<{ place:IPlace }>()
);

export const createPlaceSuccess=createAction(
    '[Place] Create Place Success',
    props<{ place:IPlace }>()
);

export const createPlaceFailure=createAction(
    '[Place] Create Place Failure',
    props<{ error:string }>()
);

export const deletePlace=createAction(
    '[Place] Delete Place',
    props<{ placeId:string }>()
);

export const deletePlaceSuccess=createAction(
    '[Place] Delete Place Success',
    props<{ placeId:string }>()
);

export const deletePlaceFailure=createAction(
    '[Place] Delete Place Failure',
    props<{ error:string }>()
);
