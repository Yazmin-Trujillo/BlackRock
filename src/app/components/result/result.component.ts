import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilerService } from 'src/app/services/profiler.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  
  constructor(
    private profileService: ProfilerService,
    private router: Router
    ) {
      this.profile='Perfil de inversion';
    }

  ngOnInit(): void {
    console.log(this.profileService.getTotal());
    const total = this.profileService.getTotal();
    if (total > 0 && total < 39) {
      this.profile = 'Conservador';   
    } else if (total > 0 && total < 39) {
      this.profile = 'Moderado';  
    } else if (total > 0 && total < 39) {
      this.profile = 'perfil 2';  
    } else {
      this.profile = 'Contesta las preguntas para saber tu perfil'
    }
  }

  profile:string;


  
  
}
