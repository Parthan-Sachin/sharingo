import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';
import  *  as  data  from  '../../assets/volunteer.json';

@Component({
    selector: 'app-volunteer-list',
    templateUrl: './volunteer-list.component.html',
    styleUrls: ['./volunteer-list.component.css']
})


export class VolunteerListComponent implements OnInit{

    public volunteerList: any;
    jsonProducts: any = (data as any).default;

    constructor(private donorService: DonorService){

    }

    ngOnInit(){
        this.donorService.getVolunteers().subscribe(
            result =>{
                console.log(result);
                //this.volunteerList = result;
            }
        )

        //comment this line if not deploying
        this.volunteerList = this.jsonProducts;
    }

}