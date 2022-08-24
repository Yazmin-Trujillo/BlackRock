import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss']
})
export class SecondQuestionComponent implements OnInit {

  result = [] as any;
  points1 = 0 as any;

  options = new Set([
    'Ganancias a corto plazo',
    'Comprar una casa',
    'Ahorro para el retiro',
 ]);

  stateOptions: any[];

  paymentOptions: any[];

  justifyOptions: any[];

  value1: string = "off";

  value2!: number;

  value3 = new Set([
    'Ganancias a corto plazo',
    'Comprar una casa',
    'Ahorro para el retiro',
 ]);

  constructor() {
    this.stateOptions = [{label: 'Ok', value: 'ok'}];

  this.paymentOptions = [
      {name: 'Option 1', value: 1},
      {name: 'Option 2', value: 2},
      {name: 'Option 3', value: 3}
  ];

  this.justifyOptions = [
      {icon: 'pi pi-align-left', justify: 'Left'},
      {icon: 'pi pi-align-right', justify: 'Right'},
      {icon: 'pi pi-align-center', justify: 'Center'},
   /*    {icon: 'pi pi-align-justify', justify: 'Justify'} */
  ];
   }


  ngOnInit(): void {
  }

}

