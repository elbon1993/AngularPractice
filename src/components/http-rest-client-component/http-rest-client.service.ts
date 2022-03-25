import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRestClientService {

  constructor(private http: HttpClient) { }


  getPosts() {
    // return complete HTTP response
    return this.http.get('https://gorest.co.in/public/v2/posts', { observe: 'response' });
  }

  createUser(user: any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 8bdbae7a9df04041daf6be04ec2e4b3534272e61120df783f82ba7461e63e91a'
    }); 

    let body = {"id":2699,"name":"Anilaabh Pandey","email":"pandey_anilaabh@bashirian.com","gender":"male","status":"active"};
    if(user) {
      body = user;
    }
    return this.http.post('https://gorest.co.in/public/v2/users', body, {headers});
  }

  getUsers() {
    return this.http.get('https://gorest.co.in/public/v2/users');
  }
}
