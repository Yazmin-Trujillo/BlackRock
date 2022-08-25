import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.scss']
})
export class UseraccountComponent implements OnInit {

  data: any;
  options: any;
  products: any;
  cols: any;

  constructor() { 

    this.products = [
      { producto: 'BLKREAL', invertido: '$ 5,000' , rendimiento:'1.3%'},
      { producto: 'BLKUSLQ', invertido: '$ 8,000' , rendimiento:'3.3%'} ,
      { producto: 'BLKGLO3', invertido: '$ 2,000' , rendimiento:'4.8%'} ]

  this.cols =[
      { field: 'producto', header: 'Producto' },
      { field: 'invertido', header: 'Invertido' },
      { field: 'rendimiento', header: 'Rendimiento' }
  ],
    this.data = {
      labels: ['BLKREAL', 'BLKUSLQ','BLKGLO03'] ,
    
      datasets: [

        {
          type:"line",  
          label: 'rendimiento',
          borderWidth: 2,
          fill: false,
          data: [10.3, 30.3, 40.8],
           borderColor: [
              "#056DAE"      
          ]
        },
          {
            type:"bar",  
            label: 'invertido',
              data: [50, 80, 20],
              backgroundColor: [
                "#f3d58d",
                "#FF4713",
                "#FFFFFF"      
            ],
            hoverBackgroundColor: [
              "#66BB6A",
              "#056DAE",
              "#36A2EB"
              
            ]
          }
        
      ]
  }

  this.options = {
    plugins: {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      legend: {
          labels: {
              color: '#FFFFFF'
          }
      }
  },

};
  
  
  }

  ngOnInit(): void {
  }

  getLightTheme() {
    return {
        plugins: {
            legend: {
                labels: {
                    color: '#ffffff'
                }
            }
        }
    }
}

}