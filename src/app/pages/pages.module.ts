import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing module
import { RoutingModule } from './routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
