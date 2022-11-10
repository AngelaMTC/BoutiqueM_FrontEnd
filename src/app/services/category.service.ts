import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/Models/category';

@Injectable({
    providedIn: 'root',
})
export class CategorysService {

    httpOptions = {
        headers: new Headers({ 'content-Type': 'application/json', 'access-Control-Allow-Origin': '*' })
    };

    private url = 'https://localhost:5000/api/';

    constructor(private http: HttpClient) {
        this.getCategory();

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

    public getCategory(): Observable<any> {
        return this.http
            .get(this.url + '/')
            .pipe(
                map(this.extractData),
                catchError(this.handleError)
            );
    }


    createCategory(data: any): Observable<any> {
        const headers = { 'content-type': 'application/json,', 'access-Control-Allow-Origin': '*' };
        const body = JSON.stringify(data);
        console.log('POST Category:', body);
        return this.http.post(this.url, data, { headers });
    }



    public updateCategorys(id: any, data: any): Observable<any> {
        const headers = { 'content-type': 'application/json,', 'access-Control-Allow-Origin': '*' };
        console.log('PUT :', data);
        return this.http.put(`${this.url}/${id}`, data, { headers }).pipe(map(this.extractData), catchError(this.handleError));
    };


    public deleteCategory(id: Category): Observable<any> {
        return this.http.delete(this.url + '/' + id)
            .pipe(map(this.extractData), catchError(this.handleError));
    };

    //Create methods adove this method:
    private extractData(res: Response) {
        const body = res;
        return body || {};
    }
}
