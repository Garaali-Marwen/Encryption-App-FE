import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl: string = 'http://localhost:8085/api';

  constructor(private httpClient: HttpClient) {
  }

  public signIn(req: FormData): Observable<any>{
    return this.httpClient.post<any>(`${this.apiBaseUrl}/user/signIn`, req);
  }

  public signUp(req: any): Observable<any>{
    return this.httpClient.post<any>(`${this.apiBaseUrl}/user/signup`, req);
  }

  public emailVerif(email: string): Observable<any>{
    return this.httpClient.post<any>(`${this.apiBaseUrl}/user/email/verification`, email);
  }

  public getUserById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseUrl}/user/${id}`);
  }

  public getUserId(){
    return JSON.parse(localStorage.getItem('userId')!);
  }

  public setUserId(userId: number) {
    localStorage.setItem('userId', JSON.stringify(userId));
  }

  public getUserRole(){
    return JSON.parse(localStorage.getItem('userRole')!);
  }

  public setUserRole(userRole: number) {
    localStorage.setItem('userRole', JSON.stringify(userRole));
  }

  public logOut(){
    localStorage.clear();
  }
}
