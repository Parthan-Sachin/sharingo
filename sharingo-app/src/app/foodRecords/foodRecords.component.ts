import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import  *  as  data  from  '../../assets/data.json';



@Component({
    selector: 'app-food-records',
    templateUrl: './foodRecords.component.html',
    styleUrls: ['./foodRecords.component.css']
  })

export class FoodRecordsComponent implements OnInit{

  
    public foodRecords: any = [];
    products: any = (data as any).default;
     constructor(private donorService: DonorService){

    }

    ngOnInit(){
        // enable this statement to get data from database
        this.donorService.getFoodCallRecords().subscribe(
            result => {
            console.log(result);
          this.foodRecords = result;
        }
        )
        
       

       //console.log(this.products);
      //this.foodRecords = this.products;
    }


}