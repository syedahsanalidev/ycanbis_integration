import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL = environment.awsTwitterApiUrl;
  constructor(private _httpClient: HttpClient) { }

  /**
   * 
   * @param registerData 
   * @returns 
   */
  login(registerData: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/user/login`, registerData);
  }
}
