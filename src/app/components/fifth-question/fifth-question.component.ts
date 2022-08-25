import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilerService } from 'src/app/services/profiler.service';

@Component({
  selector: 'app-fifth-question',
  templateUrl: './fifth-question.component.html',
  styleUrls: ['./fifth-question.component.scss']
})
export class FifthQuestionComponent implements OnInit {

 

  constructor(
    private profileService: ProfilerService,
    private router: Router
    ) {}


  ngOnInit(): void {
  }

  setResFifth(name: string, value: number){
    const res = { name, value, id: 1 }
    this.profileService.addRes(res);
    this.router.navigateByUrl('/result');
    console.log(this.profileService.questions)
  }

}
