import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilerService } from 'src/app/services/profiler.service';

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.scss']
})
export class FourthQuestionComponent implements OnInit {

 

  constructor(
    private profileService: ProfilerService,
    private router: Router
    ) {}


  ngOnInit(): void {
  }

  setResFourth(name: string, value: number){
    const res = { name, value, id: 1 }
    this.profileService.addRes(res);
    this.router.navigateByUrl('/fifth-question');
    console.log(this.profileService.questions)
  }

}
