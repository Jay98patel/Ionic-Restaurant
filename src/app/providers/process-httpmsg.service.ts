import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }
  public extractData(res:Response){
    let body=res.json;
    return body ||{}
  }
  public handleError(error:HttpErrorResponse  | any){
    let errMsg:string;
    if(error.error instanceof ErrorEvent){
      errMsg=error.error.message;
      console.log("there is an error")
    }
    else{
      errMsg=`${error.status} - ${error.statusText || ''} ${error.error }`;
    }
    return throwError(errMsg)
   }
  
}
