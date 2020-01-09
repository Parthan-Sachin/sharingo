import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';




import { DonorComponent } from './donor/donor-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    DashboardComponent,
     
     DonorComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'donor',component: DonorComponent}
    ]),
    BrowserAnimationsModule,
    
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
