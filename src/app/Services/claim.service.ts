import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  private apiBaseUrl: string = 'http://192.168.147.129:8085/api';

  constructor(private httpClient: HttpClient) {
  }

  public addClaim(req: any): Observable<any>{
    return this.httpClient.post<any>(`${this.apiBaseUrl}/claim/add`, req);
  }

  public getClaims(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.apiBaseUrl}/claim/all`);
  }

  public getClaimsByUserId(id: number): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.apiBaseUrl}/claim/user/${id}`);
  }
}
