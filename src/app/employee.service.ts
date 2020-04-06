import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "\assets\data\employee.json";
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catch(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
}
}
