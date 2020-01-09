import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-donor-new',
  templateUrl: './donor-new.component.html',
  styleUrls: ['./donor-new.component.css']
})
export class DonorComponent implements OnInit {

   donorForm =new FormGroup({});
   saveObject:any;
   donor:any;
   
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.donorForm = this.fb.group({
      name:[''],
      address:[''],
      contactNumber:[''],
      foodCount:[''],
      foodItems:[''],
      description:[''],
      serviceCharge:[''],
      operator:['']

    })
  
  }

  saveDonor()
  {
    this.saveObject=Object.assign({},this.donor,this.donorForm.value)

    console.log(this.saveObject);
  
    

  }

}