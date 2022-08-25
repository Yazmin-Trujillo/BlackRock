import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilerService } from 'src/app/services/profiler.service';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss']
})
export class ThirdQuestionComponent implements OnInit {

  constructor(
    private profileService: ProfilerService,
    private router: Router
    ) {}


  ngOnInit(): void {
  }

  setResThird(name: string, value: number){
    const res = { name, value, id: 1 }
    this.profileService.addRes(res);
    this.router.navigateByUrl('/fourth-question');
    console.log(this.profileService.questions)
  }

}
