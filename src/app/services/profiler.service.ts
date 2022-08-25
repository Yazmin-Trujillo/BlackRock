import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilerService {

  questions: Array<{ name: string, value: number, id: number }>;

  constructor() {
    this.questions = [];
  }

  addRes(res:{ name: string, value: number, id: number }) {
    // Si existe el id dentro del arreglo entonces lo elimino y agrego el nuevo objeto
    this.questions.push(res);
  }

  getTotal() {
    return this.questions.reduce( (a, obj) => obj.value + a, 0 );
  }

}
