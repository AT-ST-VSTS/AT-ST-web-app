import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { LoginModel, LoginExternalModel } from './auth.models';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(login: LoginModel): Observable<boolean> {
    const url = 'https://at-st-api-staging.azurewebsites.net/Auth/Login';

    const params = new HttpParams();
    params.set('email', login.email);
    params.set('password', login.password);
    params.set('rememberMe', login.rememberMe ? 'true' : 'false');

    const options = {
      params: params
    };

    return this.http.post<LoginModel>(url, null, options)
    .pipe(
      catchError(this.handleError)
    );
  }

  loginExternal(loginExternal: LoginExternalModel): void {

    const url = 'https://at-st-api-staging.azurewebsites.net/Auth/LoginExternal?provider=' + loginExternal.provider;
    window.location.href = url;

    // const params = new HttpParams();
    // params.set('provider', loginExternal.provider);

    // const options = {
    //   params: params
    // };

    // return this.http.post<LoginExternalModel>(url, null, options)
    // .pipe(
    //   catchError(this.handleError)
    // );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }



  LoginWithRecoveryCode(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  LoginWithTwoFactorComponent(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  register(): void {
  }

  resetPassword(): void {
  }

  forgotPassword(): void {
  }

  confirmEmail(): void {
  }
}
