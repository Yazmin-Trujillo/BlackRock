import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilerService } from 'src/app/services/profiler.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  profile:string;
  fondos: string;
  imgProfileAgre: string;
  imgProfileMod: string;
  imgProfileCon: string;
  imageProfile: string;

  constructor(
    private profileService: ProfilerService,
    ) {
      this.profile='Perfil de inversion';
      this.fondos= 'Descubre el fondo de inversión ideal para ti ';
      this.imgProfileAgre='assets/arriesgado.png',
      this.imgProfileMod='assets/moderado.png',
      this.imgProfileCon='assets/conservador.png'
      this.imageProfile='assets/conservador.png'
    }

  ngOnInit(): void {
    console.log(this.profileService.getTotal());
    const total = this.profileService.getTotal();

    if (total > 0 && total < 39) {
      this.profile = 'Conservador';
    } else if (total > 39 && total < 65) {
      this.profile = 'Moderado';
    } else if (total > 65) {
      this.profile = 'Agresivo';
    } else {
      this.profile = 'Contesta las preguntas para saber tu perfil'
    }

    if (total > 0 && total < 39) {
      this.fondos = 'BLKOB+';
      this.imageProfile=this.imgProfileCon;
    } else if (total > 39 && total < 65) {
      this.fondos = 'GOLD02+';
      this.imageProfile=this.imgProfileMod;
    } else if (total > 65) {
      this.fondos = ' GOLD5+';
      this.imageProfile=this.imgProfileAgre;
    } else {
      this.fondos = 'Contesta las preguntas para saber tu perfil'
    }
  }
}
