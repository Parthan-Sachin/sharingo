import { Component, OnInit, TemplateRef } from '@angular/core';
import  *  as  data  from  '../../assets/data.json';
import { DonorService } from '../donor.service';
import { Subscription, observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { combineLatest } from 'rxjs'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']

})
export class OrdersComponent implements OnInit {

  public foodRecords: any = [];
  modalRef:BsModalRef;
  messages:any
  subscriptions:any
  products: any = (data as any).default;
   constructor(private donorService: DonorService,private modalService:BsModalService){

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

openModal(template: TemplateRef<any>, modalComponent: string) {

  //this.searchinput.nativeElement.value = "";
  this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
}

unsubscribe() {
  this.subscriptions.forEach((subscription: Subscription) => {
    subscription.unsubscribe();
  });
  this.subscriptions = [];
}


}
