import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'text/plain; charset=utf-8'
    }),
  }

  private REST_API_SERVER = 'https://api.covid19api.com/';

  constructor(private HttpClient: HttpClient) { }

  public getAll() {
    const url = `${this.REST_API_SERVER}`;
    return this.HttpClient.get<any>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  public getSummary() {
    const url = `${this.REST_API_SERVER}summary`;
    return this.HttpClient.get<any>(url, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
