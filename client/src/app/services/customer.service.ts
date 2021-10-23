import {
  HttpClient,
  HttpResponse,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  base_Url = 'http://localhost:3000/customers';

  constructor(private _http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleErrors(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error: ' + error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status} body was: ${error.error}`
      );
    }
    return throwError('Somewthing went wrong');
  }

  createCustomer(item: any): Observable<Customer> {
    return this._http
      .post<Customer>(
        `${this.base_Url}/add`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleErrors));
  }

  getCustomer(): Observable<Customer> {
    return this._http
      .get<Customer>(this.base_Url)
      .pipe(retry(2), catchError(this.handleErrors));
  }

  getCustomerById(id: string): Observable<Customer> {
    return this._http
      .get<Customer>(`${this.base_Url}/${id}`)
      .pipe(retry(2), catchError(this.handleErrors));
  }

  updateCustomer(item: any): Observable<Customer> {
    return this._http
      .put<Customer>(this.base_Url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleErrors));
  }

  deleteCustomer(id: string): Observable<Customer> {
    return this._http
      .delete<Customer>(`${this.base_Url}/${id}`)
      .pipe(retry(2), catchError(this.handleErrors));
  }

  updateCustomerStatus(item: any): Observable<Customer> {
    return this._http
      .patch<Customer>(this.base_Url, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleErrors));
  }

  searchCustomer(item: any): Observable<Customer> {
    return this._http
      .post<Customer>(
        `${this.base_Url}/search`,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleErrors));
  }
}
