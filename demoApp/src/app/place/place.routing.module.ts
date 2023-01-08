import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaceAddComponent } from "../tourism/place-add.component";
import { PlaceEditComponent } from "../tourism/place-edit.component";

const placeRoutes:Routes=[
    {path: 'addPlace', component: PlaceAddComponent },
    {path: 'editPlace', component: PlaceEditComponent }

];

@NgModule({
    imports:[
        RouterModule.forChild(placeRoutes),],
        exports:[RouterModule]})
    
        export class PlaceRoutingModule{

        }
