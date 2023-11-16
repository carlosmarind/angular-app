import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http: HttpClient) { }

  postData(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }

  getData(parameros: any): Observable<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token123'
    })

    let params = new HttpParams({ fromObject: parameros });

    const options = {
      headers,
      params
    }

    return this.http.get('http://localhost:3000/users', options)
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('Error en la solicitud:', error);
          return throwError(() => new Error('Hubo un error. Inténtelo de nuevo.'));
        }
        ));
  }
}
