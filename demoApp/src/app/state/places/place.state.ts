import { IPlace } from 'src/app/tourism/place';
import * as AppState from '../../state/app.state';

export interface State extends AppState.State{
    places: PlaceState;
}

export interface PlaceState{
    currentPlaceId: string|null,
    places: IPlace[],
    error: string
}

export const initialState:PlaceState={
    currentPlaceId: null,
    places:[],
    error:''
}