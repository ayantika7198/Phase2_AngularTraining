import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MathomeComponent } from "./mathome.component";
import { MatmanagerComponent } from "./matmanager.component";
import { MatproductComponent } from "./matproduct.component";
import { MatuserComponent } from "./matuser.component";


const matRoutes: Routes=[
    
    
      {path:'manager', component:MatmanagerComponent},
      {path:'user', component: MatuserComponent},
      {path:'product',component: MatproductComponent}
      
    
];

@NgModule({
    imports:[
        RouterModule.forChild(matRoutes),],
        exports:[RouterModule]
})

export class MatRoutingModule{

}