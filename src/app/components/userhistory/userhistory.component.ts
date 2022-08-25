import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss']
})
export class UserhistoryComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: ['MAYO', 'JUNIO', 'AGOSTO'] ,
    
      datasets: [
          {
              label: 'First Dataset',
              data: [20, 40, 40],
              backgroundColor: [
                '#7E57C2',
                '#66BB6A',
                '#FFCA28'    
            ],
            hoverBackgroundColor: [
              "#66BB6A",
              "#056DAE",
              "#36A2EB"
              
            ]
          }
      ]
  }
   }

  ngOnInit(): void {
  }

}
