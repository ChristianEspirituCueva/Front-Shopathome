import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Order} from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Order[]>{
    return this.http.get<Order[]>(`${environment.apiUrl}orders`);
  }
  get(id: number): Observable<Order> {
    return this.http.get<any>(`${environment.apiUrl}orders/${id}`);
  }

  create(model: Order): Observable<{}> {
    return this.http.post(`${environment.apiUrl}orders`, model);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${environment.apiUrl}orders/${id}`);
  }

  update(model: Order): Observable<{}> {
    return this.http.put(`${environment.apiUrl}orders`, model);
  }
}
