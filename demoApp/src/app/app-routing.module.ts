import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animals/animal-details.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { AppaboutComponent } from './appabout/appabout.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { BookComponent } from './book/book.component';
import { CardListComponent } from './cards/cardlist.component';
import { EventListComponent } from './events/event-list.component';
import { AddFlowerComponent } from './flowers/add-flower.component';
import { EditFlowerComponent } from './flowers/edit-flower.component';
import { FlowerListComponent } from './flowers/flower-list.component';
import { MathomeComponent } from './mats/mathome.component';
import { ToolbarComponent } from './mats/toolbar.component';
import { ProductAddComponent } from './products/product-add.component';
import { ProductListComponent } from './products/product-list.component';
import { PlaceListComponent } from './tourism/place-list.component';
import { AuthGuard } from './users/auth-guard.service';
import { LoginComponent } from './users/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path:'',component:ApphomeComponent,pathMatch:'full'
  },
  {
    path:'about',component:AppaboutComponent
  },
  {
    path:'products',
  component:ProductListComponent,
  canActivate:[AuthGuard],
  loadChildren:()=>import('../app/product/product.module').then(m=>m.ProductModule)
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
  {path:'flowers',component:FlowerListComponent,
  children:[
    {path:'editFlower',component:EditFlowerComponent,canActivate:[AuthGuard]}
  ]},
  {path:'login',component:LoginComponent},
  {path:'addFlower',component:AddFlowerComponent, canActivate:[AuthGuard]},
  {path:'welcome',component:WelcomeComponent},
  {path:'cardlist',component:CardListComponent},
  {path:'todo',
  loadChildren:()=>import('./todo/todo.module').then((m)=>m.TodoModule),
},
{
  path:'tour',
component:PlaceListComponent,
canActivate:[AuthGuard],
loadChildren:()=>import('./place/place.module').then(m=>m.PlaceModule)
},
{path:'mat',component:ToolbarComponent,
loadChildren:()=>import('./mats/mat-module.module').then(m=>m.MatModuleModule)
},
{path:'mathome',component:MathomeComponent,
loadChildren:()=>import('./mats/mat-module.module').then(m=>m.MatModuleModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
