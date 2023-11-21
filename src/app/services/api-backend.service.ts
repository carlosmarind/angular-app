import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http: HttpClient) { }

  postData(user: any) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token12345'
    }

    const options = { headers };
    return this.http.post('http://localhost:3000/users', user, options)
  }

  getData(parametros: any): Observable<User[]> {

    let params = new HttpParams({ fromObject: parametros });

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token12345'
    }

    const options = { params, headers };

    return this.http.get<User[]>('http://localhost:3000/users', options)
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('se ha producido un error en el servicio api backend')
          console.error(error)
          return throwError(() => new Error('Error personalizado'));
        })
      );
  }
}
