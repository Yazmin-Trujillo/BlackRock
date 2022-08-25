import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilerService } from 'src/app/services/profiler.service';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {

 

  constructor(
    private profileService: ProfilerService,
    private router: Router
    ) {}


  ngOnInit(): void {
  }

  setResFirst(name: string, value: number){
    const res = { name, value, id: 1 }
    this.profileService.addRes(res);
    this.router.navigateByUrl('/second-question');
    console.log(this.profileService.questions)
  }

}
