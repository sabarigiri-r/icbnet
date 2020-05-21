import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import {CredentialsComponent} from './credentials/credentials.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { label: 'HOME' } },
  { path: 'team', component: TeamComponent, data: { label: 'TEAM'}},
  { path: 'products', component: ProductsComponent, data: { label: 'PRODUCTS'}},
  { path: 'pricing', component: PricingComponent, data: { label: 'PRICING'}},
  { path: 'credentials', component: CredentialsComponent, data: { label: 'CREDENTIALS' } },
  { path: 'services', component: ServicesComponent, data: { label: 'SERIVCES'} },
  { path: 'contact', component: ContactComponent, data: { label: 'CONTACT' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
