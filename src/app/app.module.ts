import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { CustomMaterialModule } from './shared/custom.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeamComponent,
    HomeComponent,
    ContactComponent,
    PricingComponent,
    ProductsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule
  
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/icbnet'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

