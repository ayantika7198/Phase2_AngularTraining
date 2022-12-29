import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PenthouseComponent } from './penthouse/penthouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatlistComponent } from './flats/flatlist.component';
import { AnimalListComponent } from './animals/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarIconComponent } from './star/star-icon.component';
import { CartComponent } from './carts/cart.component';
import { RepeatDataPipe } from './repeat-data.pipe';
import { TransformDataPipe } from './transform-data.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './events/event-list.component';
import { EventDetailsComponent } from './events/event-details.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from 'shared/inmemoryeventdb.service';
import { ExtrastylingDirective } from './extrastyling.directive';
import { TrusteeComponent } from './trustee/trustee.component';
import { BookComponent } from './book/book.component';






@NgModule({
  declarations: [
   AppComponent,
   PenthouseComponent,
   WelcomeComponent,
   FlatlistComponent,
   AnimalListComponent,
   ProductListComponent,
   StarIconComponent,
   CartComponent,
   RepeatDataPipe,
   TransformDataPipe,
   NavbarComponent,
   EventListComponent,
   EventDetailsComponent,
   ExtrastylingDirective,
   TrusteeComponent,
   BookComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
