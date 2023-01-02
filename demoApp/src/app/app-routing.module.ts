import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animals/animal-details.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { AppaboutComponent } from './appabout/appabout.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { BookComponent } from './book/book.component';
import { EventListComponent } from './events/event-list.component';
import { FlowerListComponent } from './flowers/flower-list.component';
import { ProductAddComponent } from './products/product-add.component';
import { ProductListComponent } from './products/product-list.component';
import { AuthGuard } from './users/auth-guard.service';
import { LoginComponent } from './users/login.component';


const routes: Routes = [
  {
    path:'',component:ApphomeComponent,pathMatch:'full'
  },
  {
    path:'about',component:AppaboutComponent
  },
  {
    path:'products',component:ProductListComponent,
    canActivate:[AuthGuard],
    children:[
      {path:'addProduct',component:ProductAddComponent}
    ]
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
  {path:'flowers',component:FlowerListComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
