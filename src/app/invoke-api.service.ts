import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable()
export class InvokeApiService<T, S> {
  public httpMethods = {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    options: 'OPTIONS',
    delete: 'DELETE',
    patch: 'PATCH'

  };


  constructor(private http: HttpClient ) { }

  public invokeApifile<S>(method: string, url: string, input: FormData): Observable<S> {

      return this.http.request<S>(method, url , {
        body: input,
      });
    
  }
}
