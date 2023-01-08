import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceListComponent } from '../tourism/place-list.component';
import { PlaceRoutingModule } from './place.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PlaceEffects } from '../state/places/place.effects';
import { placeReducer } from '../state/places/place.reducer';
import { PlaceAddComponent } from '../tourism/place-add.component';
import { PlaceEditComponent } from '../tourism/place-edit.component';



@NgModule({
  declarations: [
    PlaceListComponent, PlaceAddComponent, PlaceEditComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    PlaceRoutingModule,
    StoreModule.forFeature('places', placeReducer),
    EffectsModule.forFeature([PlaceEffects])]
  
})
export class PlaceModule { }
