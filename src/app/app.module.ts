import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from "./app.routes";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TravelComponent } from './travel/travel.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ProtectionComponent } from './protection/protection.component';
import { BenefitListComponent } from './benefit-list/benefit-list.component';
import { BenefitDetailComponent } from './benefit-detail/benefit-detail.component';
import { OrderByIdPipe } from './pipes/order-by-id.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravelComponent,
    LifestyleComponent,
    ProtectionComponent,
    BenefitListComponent,
    BenefitDetailComponent,
    OrderByIdPipe,
    PageNotFoundComponent,
    SearchComponent,
    SearchBoxComponent
  ],
  imports: [
		RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
