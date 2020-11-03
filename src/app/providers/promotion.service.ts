import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { Leader } from '../shared/leader';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Promotion } from '../shared/promotion';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient,private processHTTPMsgService:ProcessHttpmsgService) { }
  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    }
    getPromotion(id:String):Observable<Promotion>{
      return  this.http.get<Promotion>(baseURL + 'promotions/'+ id)
    }
    getFeaturedPromotion():Observable<Promotion>{
      return this.http.get<Promotion>(baseURL + 'promotions?featured=true').pipe(map(dishes => dishes[0]))
    }
  
}
