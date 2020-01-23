import { Component, OnInit, TemplateRef } from '@angular/core';
import { DonorService } from '../donor.service';
import  *  as  data  from  '../../assets/volunteer.json';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-volunteer-list',
    templateUrl: './volunteer-list.component.html',
    styleUrls: ['./volunteer-list.component.css']
})


export class VolunteerListComponent implements OnInit{

    public volunteerList: any;
    jsonProducts: any = (data as any).default;
    modalRef: BsModalRef;
    public volunteerForm = new FormGroup({});

    constructor(private donorService: DonorService, private modalService: BsModalService,private fb: FormBuilder){

    }

    ngOnInit(){

       
        this.volunteerForm = this.fb.group({
            name:[''],
            contact:['']
      
          })

        this.donorService.getVolunteers().subscribe(
            result =>{
                console.log(result);
                this.volunteerList = result;
            }
        )

        //comment this line if not deploying
        //this.volunteerList = this.jsonProducts;
    }

    openModal(template: TemplateRef<any>){
        this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    }

    saveVolunteer(){
        let volunteer = {"name":this.volunteerForm.get('name').value,"contact":this.volunteerForm.get('contact').value};
        console.log(volunteer);
        this.donorService.saveVolunteer(volunteer).subscribe(
            result => console.log(result)
        )
    }

}