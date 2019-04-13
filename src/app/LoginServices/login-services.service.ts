import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, UrlSegment } from '@angular/router';
import { TokenResponse } from './TokenResponse';
import { Observable, of } from 'rxjs';
import { LoginModel } from './LoginModel';
import * as config from '../Config/config';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class LoginServicesService implements /*CanLoad,*/ CanActivate {


  isLoggedIn = false;
  loggedInUser = new LoginModel();

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  prevUrl: string;

  headers = new HttpHeaders();

  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return headers;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.headers = this.getHeaders();
  }

  getAccessToken(username: string, password: string): Observable<TokenResponse> {
    let data = "grant_type=password&username=" + username + "&password=" + password;

    return this.http.post<TokenResponse>(config.Url + 'Token', data, { headers: this.headers });
  }



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.prevUrl = "";
    this.prevUrl = this.router.url;

    if (this.isLoggedIn)
      return true;
    else {


      this.redirectUrl = state.url;

      this.router.navigate(['/login']);

      return false;
    }
  }




  login(username: string, password: string): Observable<boolean> {
    return this.getAccessToken(username, password)
      .pipe(
        map(at => {
          let tokenResponse: TokenResponse;
          tokenResponse = at;
          console.log('tokenResponse: ', tokenResponse);
          if (tokenResponse) {
            this.loggedInUser.eMail = tokenResponse.userName;
            this.loggedInUser.userName = tokenResponse.userName;
            this.loggedInUser.token = tokenResponse.access_token;
            this.loggedInUser.expires = new Date(tokenResponse[".expires"]);
            this.loggedInUser.userId = 1;     // must be changed if needed

            console.log(this.loggedInUser.token);
            this.isLoggedIn = true;
            this.saveLoggedinInfo(this.loggedInUser);
            return true;
          }
          else {
            this.isLoggedIn = false;
            localStorage.removeItem("currentUser");

            return false;
          }
        }));

  }

  logout(): void {
    this.isLoggedIn = false;

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  saveLoggedinInfo(loginUser: LoginModel) {

    // use encryption if possible
    localStorage.setItem('currentUser', JSON.stringify(loginUser));
    localStorage.setItem('Auth_token', this.loggedInUser.token);

  }

  getLoggedinInfo(): LoginModel {
    // decrypt info if it's encrypted
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    return this.loggedInUser;
  }


}
