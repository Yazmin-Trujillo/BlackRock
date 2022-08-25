import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilerService } from 'src/app/services/profiler.service';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss']
})
export class SecondQuestionComponent implements OnInit {

  constructor(
    private profileService: ProfilerService,
    private router: Router
    ) {}


  ngOnInit(): void {
  }

  setResSecond(name: string, value: number){
    const res = { name, value, id: 2 }
    this.profileService.addRes(res);
    this.router.navigateByUrl('/third-question');
    console.log(this.profileService.questions)
  }

}
