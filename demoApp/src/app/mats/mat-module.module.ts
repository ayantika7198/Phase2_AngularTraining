import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRoutingModule } from './mat-module.routing.module';
import { ToolbarComponent } from './toolbar.component';
import { MaterialExampleModule } from 'src/material.module';
import { MathomeComponent } from './mathome.component';
import { MatmanagerComponent } from './matmanager.component';
import { MatuserComponent } from './matuser.component';
import { MatproductComponent } from './matproduct.component';



@NgModule({
  declarations: [ToolbarComponent, MathomeComponent, MatmanagerComponent, MatuserComponent, MatproductComponent],
  imports: [
    CommonModule, MatRoutingModule, MaterialExampleModule
  ]
})
export class MatModuleModule { }
