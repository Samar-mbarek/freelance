import { Component, OnInit } from '@angular/core';
import { Freelancer } from 'app/models/freelancer';
import { FreelancerService } from 'app/services/freelancer.service';

@Component({
  selector: 'freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {
freelancers : Freelancer[]=[];

  constructor(private freelancerservice : FreelancerService) { }

  ngOnInit(): void {
    this.getFreelancers();
  }


  getFreelancers(){
    this.freelancerservice.getFreelancers().subscribe(
      (data) => {
        this.freelancers = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
