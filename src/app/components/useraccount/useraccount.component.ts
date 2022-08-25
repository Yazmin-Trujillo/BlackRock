import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss']
})
export class UseraccountComponent implements OnInit {

  data: any;

  constructor() { 
    this.data = {
      labels: ['BLKREAL rendimiento:.3%', 
      'BLKUSLQ rendimiento:3.3%', 
      'BLKGLO3 rendimiento:4.8%'],
    
      datasets: [
          {
           
              label: 'First Dataset',
              data: [40, 25, 20],
              backgroundColor: [
                "#F0BF4C",
                "#FF4713",
                "#FD9BB4"      
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

  getLightTheme() {
    return {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    }
}

}
