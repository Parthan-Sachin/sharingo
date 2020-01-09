import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-donor-new',
  templateUrl: './donor-new.component.html',
  styleUrls: ['./donor-new.component.css']
})
export class DonorComponent implements OnInit {

    public myForm: FormGroup;
    public name = new FormControl('');
    public address = new FormControl('');


  constructor() { }

  ngOnInit() {

    
  }

}