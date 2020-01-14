import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




import { DonorComponent } from './donor/donor-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorService } from './donor.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FoodRecordsComponent } from './foodRecords/foodRecords.component';
import { LoginComponent } from './LoginPage/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    DashboardComponent,
    FooterComponent,     
    DonorComponent,
    FoodRecordsComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forRoot([
      
      {path:'dashboard',component:AppComponent},
      {path:'',component:LoginComponent},
      {path:'donor/newdonorform',component: DonorComponent},
      {path:'foodrecords', component:FoodRecordsComponent}
    ]),
    BrowserAnimationsModule,
    HttpClientModule
    
    
  ],
  providers: [
    DonorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
