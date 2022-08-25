import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  stateOptions: any[];

  value1: string = "off";

   constructor() { this.stateOptions = [{label: 'Comprar', value: 'Comprar'}];

 
}


  ngOnInit(): void {
  }

  
  
}
