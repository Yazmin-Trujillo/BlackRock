import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

const httpOptions = {
  Headers: new HttpHeaders({
    'ContentType': 'aplication/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {
  private apiUrl = 'http://localhost:3001/productsOverview'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}

