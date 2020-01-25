import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DonorService } from 'src/app/donor.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  @Input() DonorID : number = 0;
  @Input() operator : string = "";
  @Output() refreshParent = new EventEmitter();
  @Input() foodRecordID : number = 0;
  @Input() operatorID: number = 0;

  public orderDetails : any;

  constructor(private donorService: DonorService) { }

  ngOnInit() {
    console.log(this.DonorID);
    this.getOrderDetails(this.DonorID)
  }

  getOrderDetails(ID:number){

    this.donorService.getCollectionByDonaorID(ID).subscribe(
      result => {
        console.log(result);
        this.orderDetails = result;
       console.log(this.orderDetails);
       
     
      }
    )
  }

}
