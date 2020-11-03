import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { Leader } from '../shared/leader';
import { ProcessHttpmsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient,private processHTTPMsgService:ProcessHttpmsgService) { }
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders')
  }
  getLeader(id:String):Observable<Leader>{
    return  this.http.get<Leader>(baseURL + 'leaders/'+ id)
  }
  getFeaturedLeader():Observable<Leader>{
    return this.http.get<Leader>(baseURL + 'leaders?featured=true').pipe(map(leader => leader[0]))
  }
}
