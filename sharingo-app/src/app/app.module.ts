import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';




import { DonorComponent } from './donor/donor-new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorService } from './donor.service';
import { HttpClientModule } from '@angular/common/http';
import { SignaturePadModule } from '@ng-plus/signature-pad';
import { FooterComponent } from './footer/footer.component';
import { FoodRecordsComponent } from './foodRecords/foodRecords.component';
import { LoginComponent } from './LoginPage/login.component';
import { OrdersComponent } from './orders/orders.component';
import { SensoryEvaluationComponent } from './sensory-evaluation/sensory-evaluation-edit.component';
import { VolunteerListComponent } from './volunteer/volunteer-list.component';
import { CollectionDistributionEditComponent } from './collection-distribution-edit/collection-distribution-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    DashboardComponent,
    FooterComponent,     
    DonorComponent,
    FoodRecordsComponent,
    LoginComponent,
    OrdersComponent,
    SensoryEvaluationComponent,
    VolunteerListComponent,
    CollectionDistributionEditComponent
    

  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SignaturePadModule,
    MatSliderModule,
    NgxDatatableModule,
    RouterModule.forRoot([
      {path:'volunteer',component:VolunteerListComponent},
      {path:'sensory',component:SensoryEvaluationComponent},
      {path:'dashboard',component:AppComponent},
      {path:'',component:LoginComponent},
      {path:'donor/newdonorform',component: DonorComponent},
      {path:'foodrecords', component:FoodRecordsComponent},
      {path:'orders', component:OrdersComponent}
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
