import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DonorService } from 'src/app/donor.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  @Input() DonorID: number = 0;
  @Input() operator: string = "";
  @Output() refreshParent = new EventEmitter();
  @Input() foodRecordID: number = 0;
  @Input() operatorID: number = 0;

  public modelCollectionDistribution: any;
  public sensoryList: any;

  constructor(private donorService: DonorService) { }

  ngOnInit() {
    console.log(this.DonorID);
    console.log(this.foodRecordID)
    this.getOrderDetails(this.DonorID);
    this.getSensoryDetails(this.foodRecordID);
  }

  getOrderDetails(ID: number) {
    this.donorService.getCollectionByDonorID(ID).subscribe(
      result => {
        this.modelCollectionDistribution = result;
      }
    )
  }

  getSensoryDetails(ID: number) {
    this.donorService.getSensoryByFoodRecordID(ID).subscribe(
      result => {
        console.log(result);
        this.sensoryList = result;
      }
    )
  }

}
