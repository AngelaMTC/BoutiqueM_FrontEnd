import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { TypeClothe } from 'src/app/Models/typeClothe';

@Injectable({
    providedIn: 'root',
})
export class TypeClothesService {

    httpOptions = {
        headers: new Headers({ 'content-Type': 'application/json', 'access-Control-Allow-Origin': '*' })
    };

    private url = 'https://boutiquebackend-production.up.railway.app/api/type';

    constructor(private http: HttpClient) {
        this.getTypeClothe();

    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('It has ocurred the next error:', error.error.message);
        }
        else {
            console.error(`Backend returned code ${error.status} with message ${error.message}`);
            console.log(error.error);
        }
        return throwError('Something went wrong, please try again later');

    }

    public getTypeClothe(): Observable<any> {
        return this.http
            .get(this.url + '/')
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }


    createtypeClothe(data: any): Observable<any> {
        const headers = { 'content-type': 'application/json,', 'access-Control-Allow-Origin': '*' };
        const body = JSON.stringify(data);
        console.log('POST typeClothe:', body);
        return this.http.post(this.url, data, { headers });
    }



    public updatetypeClothes(id: any, data: any): Observable<any> {
        const headers = { 'content-type': 'application/json,', 'access-Control-Allow-Origin': '*' };
        console.log('PUT :', data);
        return this.http.put(`${this.url}/${id}`, data, { headers }).pipe(map(this.extractData), catchError(this.handleError));
    };


    public deletetypeClothe(id: TypeClothe): Observable<any> {
        return this.http.delete(this.url + '/' + id)
            .pipe(map(this.extractData), catchError(this.handleError));
    };

    //Create methods adove this method:
    private extractData(res: Response) {
        const body = res;
        return body || {};
    }
}
