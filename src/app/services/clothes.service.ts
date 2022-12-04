import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Clothes } from '../models/clothes';
import { ClotheSave } from '../interface/clothe';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  httpOptions = {
    headers: new Headers({
      'content-Type': 'application/json',
      'access-Control-Allow-Origin': '*',
    }),
  };

  private url = 'https://boutiquebackend-production.up.railway.app/api/clothe/';
  private url2 =
    'https://boutiquebackend-production.up.railway.app/api/clothe/category?idCategory=';

  constructor(private http: HttpClient) {
    this.getClothes();
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('It has ocurred the next error:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status} with message ${error.message}`
      );
      console.log(error.error);
    }
    return throwError('Something went wrong, please try again later');
  }

  public getClothes(): Observable<any> {
    return this.http
      .get(this.url + '/')
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getClotheCategory(id: string) {
    console.log(this.url2 + id);
    return this.http
      .get(`${this.url2}${id}`)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  createClothe(data: ClotheSave): Observable<any> {
    return this.http.post(this.url, data);
  }

  public updateClothes(id: any, data: any): Observable<any> {
    const headers = {
      'content-type': 'application/json,',
      'access-Control-Allow-Origin': '*',
    };
    console.log('PUT :', data);
    return this.http
      .put(`${this.url}/${id}`, data, { headers })
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  public deleteClothe(id: Clothes): Observable<any> {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  //Create methods adove this method:
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
