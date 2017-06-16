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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TravelComponent,
    LifestyleComponent,
    ProtectionComponent,
    BenefitListComponent
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
