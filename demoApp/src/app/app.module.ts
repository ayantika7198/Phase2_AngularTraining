import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatlistComponent } from './flats/flatlist.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ProductListComponent } from './products/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { StarIconComponent } from './star/star-icon.component';
import { CartComponent } from './carts/cart.component';
import { RepeatDataPipe } from './repeat-data.pipe';
import { TransformDataPipe } from './transform-data.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from 'src/app/shared/inmemoryeventdb.service';
import { ExtrastylingDirective } from './extrastyling.directive';
import { TrusteeComponent } from './trustee/trustee.component';
import { BookComponent } from './book/book.component';
import { StudentsComponent } from './students/students.component';
import { AppnavComponent } from './appnav/appnav.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { AppaboutComponent } from './appabout/appabout.component';
import { AnimalDetailsComponent } from './animals/animal-details.component';
//import { ProductAddComponent } from './products/product-add.component';
import { FlowerListComponent } from './flowers/flower-list.component';
import { LoginComponent } from './users/login.component';
import { AddFlowerComponent } from './flowers/add-flower.component';
import { EditFlowerComponent } from './flowers/edit-flower.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CardComponent } from './cards/card.component';
import { CardListComponent } from './cards/cardlist.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';






@NgModule({
  declarations: [
   AppComponent,
   PenthouseComponent,
   WelcomeComponent,
   FlatlistComponent,
   AnimalListComponent,
   //ProductListComponent,
  // StarIconComponent,
   CartComponent,
   RepeatDataPipe,
   TransformDataPipe,
   NavbarComponent,
   EventListComponent,
   EventDetailsComponent,
   ExtrastylingDirective,
   TrusteeComponent,
   BookComponent,
   StudentsComponent,
   AppnavComponent,
   ApphomeComponent,
   AppaboutComponent,
   AnimalDetailsComponent,
   //ProductAddComponent,
   FlowerListComponent,
   LoginComponent,
   AddFlowerComponent,
   EditFlowerComponent,
   GreetingComponent,
   CardComponent,
   CardListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule,
    //EffectsModule.forRoot([AppEffects]),
StoreModule.forRoot({}),
    //have to create AppEffects
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService)
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
