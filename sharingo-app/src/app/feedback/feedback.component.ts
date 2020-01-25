import { Component, OnInit } from '@angular/core';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private donorService: DonorService) { }

  public image;

  ngOnInit() {

    this.donorService.getSignature().subscribe(
      result => {
        console.log(result);
        this.image = result;
      }
    )

  }

  showImage(event){

  }

}
