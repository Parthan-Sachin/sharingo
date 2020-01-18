import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../assets/data.json';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']

})
export class OrdersComponent implements OnInit {

  public foodRecords: any = [];
  products: any = (data as any).default;
   constructor(private donorService: DonorService){

  }

  ngOnInit() {

    this.donorService.getFoodCallRecords().subscribe(
      result => {
      console.log(result);
      this.foodRecords = result;
  }
  )

// console.log(this.products);
// this.foodRecords = this.products;
}


}
