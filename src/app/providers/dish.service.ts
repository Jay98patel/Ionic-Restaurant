import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish'
import { baseURL } from '../shared/baseurl'
import { of, Observable } from 'rxjs'
import { catchError, delay ,map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpClient,private processHTTPMsgService:ProcessHttpmsgService) { }
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
  }
  getDish(id: number): Observable<string[]|any> {
    return  this.http.get<Dish>(baseURL + 'dishes/'+ id)
  }
  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
  }
}
