import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }
  getusers(){
    return this.http.get(this.apiUrl + 'users');
  }

  getProducts(){
    return this.http.get(this.apiUrl + 'products');
  }

  getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
