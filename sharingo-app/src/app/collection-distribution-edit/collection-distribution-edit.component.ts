import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DonorService } from '../donor.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { collectionModel } from '../Models/collectionModel.model';

@Component({
  selector: 'app-collection-distribution-edit',
  templateUrl: './collection-distribution-edit.component.html',
  styleUrls: ['./collection-distribution-edit.component.css']
})
export class CollectionDistributionEditComponent implements OnInit {

  @Input() OrderID : number = 0;
  @Input() operator : string = "";
  @Output() refreshParent = new EventEmitter();
  @Input() foodRecordID : number = 0;
  @Input() operatorID: number = 0;

  modelRef : BsModalRef;
  collectionForm =new FormGroup({});
  saveObject:any;
  public collectionDistribution:collectionModel;
  public infoFlag: boolean = false;
  public warningFlag: boolean = true;
  public completed: boolean = false;
  public isDisable: boolean = false;
  public donor: any;
  public tempID : number = 0;
  public tempOperator:string=""
  public saveText:string="save"
  public hideID : boolean = true;

  
  constructor(private fb: FormBuilder,private donorService: DonorService, private modalService:BsModalService) { }

  ngOnInit() {
    
    console.log(this.foodRecordID);
    console.log(this.operator);
    this.collectionForm = this.fb.group({
      foodCallRecordId:this.foodRecordID,
      donorID:[''],
      name:[''],
      address:[''],
      date:[''],
      storageTemp:[''],
      pickupTime:[''],
      servingTemp:[''],
      deliveredTime:[''],
      operator:[''],
      operatorID:['']

    })
this.getDonor(this.OrderID,this.operator)

  }

getDonor(ID:number , operator:string){
  this.tempID = ID;
  this.donorService.getDonorByID(ID).subscribe(
    result => {
      this.tempOperator=operator;
      console.log(result);
      this.donor = result;
     console.log(this.donor);
     
     this.collectionForm.patchValue({
      foodCallRecordId:this.foodRecordID,
      donorID:this.tempID,
      name:this.donor[0].name,
      address:this.donor[0].address,
      date:this.donor[0].dateOfRegis,
      operator:this.tempOperator,
      operatorID:this.operatorID
     }) 
    }
  )
}

  formatLabel(value: number) {      
    return value + '°C';
  }

  formatLabe2(value: number) {      
    return value + '°C';
  }

  savecollection()
  {
    this.warningFlag=false;
    this.saveText= "Saving..."
    this.saveObject=Object.assign({},this.collectionDistribution,this.collectionForm.value)

    this.collectionDistribution=this.saveObject;

    console.log(this.collectionDistribution);
    this.donorService.saveFoodcollectionDetails(this.collectionDistribution).subscribe(
      result => {
        console.log(result);
        this.infoFlag = true;
        this.saveText= "Saved"
        this.completed =true;
        this.isDisable=true;
        this.refreshParent.emit(this.completed);

        setTimeout(function(){
          this.infoFlag=false;
          this.saveText= "Save"
        }.bind(this),1500);

       

        
      }
    )   

  }
  cancel(){
    this.collectionForm.reset();
    this.saveText= "Save"
  }



}
