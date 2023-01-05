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
import { ProductAddComponent } from './products/product-add.component';
import { ProductListComponent } from './products/product-list.component';
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
