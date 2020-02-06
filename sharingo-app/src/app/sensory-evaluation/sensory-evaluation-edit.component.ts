import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-sensory-edit',
  templateUrl: './sensory-evaluation-edit.component.html',
  styleUrls: ['./sensory-evaluation-edit.component.css']
})

export class SensoryEvaluationComponent implements OnInit {

  sensoryForm = new FormGroup({});
  @Input() foodRecordID: number;
  @Output() refreshParent = new EventEmitter();
  public range: number = 1;
  public fitValue: any;
  public fit: any;
  public sensoryArr: any = [];

  constructor(private fb: FormBuilder,private donorService: DonorService) {

  }

  ngOnInit() {
    console.log(this.foodRecordID);
    this.sensoryForm = this.fb.group({
      recipeName: [''],
      appearance: 0,
      aroma: 0,
      taste: 0,
      temperature: 0,
      consumption: [''],
      acceptability: ['']

    })



    this.sensoryForm.get('temperature').valueChanges.subscribe(
      value => {
        if (value >= 25) {
          this.sensoryForm.controls['consumption'].setValue('Yes');
        } else {
          this.sensoryForm.controls['consumption'].setValue('No');
        }
      }
    )
  }


  formatLabel(value: number) {
    return value + '°C';
  }

  checkValues() {
    let appearance: number = this.sensoryForm.get('appearance').value;
    let aroma: number = this.sensoryForm.get('aroma').value;
    let taste: number = this.sensoryForm.get('taste').value;

    let total = ((appearance + aroma + taste) / 21) * 100;
    if (total > 70) {
      if (this.sensoryForm.get('consumption').value == 'Yes') {
        this.sensoryForm.controls['acceptability'].setValue('Acceptable');
      } else {
        this.sensoryForm.controls['acceptability'].setValue('Not Acceptable');
      }

    } else {
      this.sensoryForm.controls['acceptability'].setValue('Not Acceptable');
    }
  }

  addMore(){
    let sensoryTemp = {'foodCallRecordId':this.foodRecordID,
                        'recipeName':this.sensoryForm.get('recipeName').value,
                        'appearance': this.sensoryForm.get('appearance').value,
                        'aroma': this.sensoryForm.get('aroma').value,
                        'taste': this.sensoryForm.get('taste').value,
                        'temperature': this.sensoryForm.get('temperature').value,
                        'fitStatus': this.sensoryForm.get('consumption').value,
                        'acceptability': this.sensoryForm.get('acceptability').value                      
                      };

    this.sensoryArr.push(sensoryTemp);
    console.log(this.sensoryArr);

  }


  save() {
    console.log(this.sensoryForm.value);
    this.donorService.saveSensory(this.sensoryArr).subscribe(
      result => {
        console.log(result);
        this.refreshParent.emit(true);
      }
    )


  }





}