import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-sensory-edit',
    templateUrl: './sensory-evaluation-edit.component.html',
    styleUrls: ['./sensory-evaluation-edit.component.css']
  })

export class SensoryEvaluationComponent implements OnInit{

    sensoryForm =new FormGroup({});
    public range: number = 1;
    public fitValue: any;   
    public fit:any;
    
    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
        this.sensoryForm = this.fb.group({
            recipeName:[''],
            appearance:[''],
            aroma:[''],
            taste:[''],
            temperature:'',
            consumption:[''],
            acceptability:['']
                  
          })

          console.log(this.fit);
          if(this.fit > 25){
            this.fitValue = 'yes';
            this.sensoryForm.controls['temperature'].setValue(this.fitValue);
          } else {
            this.fitValue = 'no';
            this.sensoryForm.controls['temperature'].setValue(this.fitValue);
          }

    }

    formatLabel(value: number) {      
        return value + '°C';
      }

    add(){
        console.log(this.sensoryForm.get('temperature').value);
    }

    save(){
        
    }

    



}