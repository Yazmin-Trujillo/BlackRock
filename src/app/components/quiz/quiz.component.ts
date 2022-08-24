import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  stateOptions: any[];

  value1: string = "off";

   constructor() { this.stateOptions = [{label: 'Ok', value: 'ok'}];

 
}


  ngOnInit(): void {
  }

  
  
}
