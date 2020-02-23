import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboardCount: any;

  constructor(
    private router:Router,
    private donorService: DonorService
    ) {}

  ngOnInit() {
    this.donorService.getDashboardCount().subscribe(
      result => {
        
        this.dashboardCount = result;
        console.log(this.dashboardCount);
      }
    )
  }

  gotoFoodRecords(){
    this.router.navigate(['foodrecords']);
  }

  gotoOrders(){
    this.router.navigate(['orders']);
  }
}
