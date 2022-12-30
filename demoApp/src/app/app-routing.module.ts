import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animals/animal-details.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { AppaboutComponent } from './appabout/appabout.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { BookComponent } from './book/book.component';
import { EventListComponent } from './events/event-list.component';
import { ProductListComponent } from './products/product-list.component';


const routes: Routes = [
  {
    path:'',component:ApphomeComponent,pathMatch:'full'
  },
  {
    path:'about',component:AppaboutComponent
  },
  {
    path:'products',component:ProductListComponent
  },
  {
    path:'events',component:EventListComponent
  },
  {
    path:'bookform',component:BookComponent
  },
  {
    path:'animals',component:AnimalListComponent
  },
  {path:'animals/:id',component:AnimalDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
