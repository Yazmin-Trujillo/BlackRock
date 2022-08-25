import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss']
})
export class UserhistoryComponent implements OnInit {

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ['Mayo', 'Junio', 'Agosto'],
      datasets: [
          {
              label: 'Monto Ingreso',
              backgroundColor: '#F0BF4C',
              data: [20, 40, 40]
          },
          {
              label: 'Ganancias',
              backgroundColor: '#FF4713',
              data: [5, 3, 1]
          }
      ]
  };

  this.options = {
    plugins: {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      legend: {
          labels: {
              color: 'white'
          }
      }
  },
  scales: {
      x: {
          stacked: true,
          ticks: {
              color: 'yellow'
          },
        
      },
      y: {
          stacked: true,
          ticks: {
              color: '#495057'
          },
         
      }
  }
};

   }

  ngOnInit(): void {
  }

}
