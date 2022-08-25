import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss']
})
export class UserhistoryComponent implements OnInit {

   data: any;
  options: any; 

  products: any[];

  cols: any[];


  constructor() {


    this.products = [
        { fecha: '06-22',  acumulado: '3.04%' , anualizado:'4.92%'},
        { fecha: '07-22',  acumulado: '13.30%' , anualizado:'4.25%'},
        { fecha: '08-22',  acumulado: '29.36%' , anualizado:'5.28%'}  ]

    this.cols =[
        { field: 'fecha', header: 'Fecha' },
        { field: 'acumulado', header: 'Acumulado' },
        { field: 'anualizado', header: 'Anualizado' }
    ]

   this.data = {
    labels: ['Junio', 'Julio', 'Agosto'],
    datasets: [
        {
            label: 'Ingreso',
            data: [56, 55, 40],
            fill: false,
            borderColor: '#FFFF',
            tension: .4
        },
        
        {
            label: 'Acumulado',
            data: [ 3.04, 13.30 , 29.36 ],
            fill: false,
            borderColor: '#FFA726',
            borderDash: [5, 5],
            tension: .4
        },
        {
            label: 'Anualizado',
            data: [ 4.92, 4.25,	5.28 ],
            fill: false,
            borderColor: '#Ff4713',
            tension: .4
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
              color: 'white',
              
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