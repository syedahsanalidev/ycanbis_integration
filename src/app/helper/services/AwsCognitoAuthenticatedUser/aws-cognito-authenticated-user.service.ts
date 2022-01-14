import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
@Injectable({
  providedIn: 'root'
})
export class AwsCognitoAuthenticatedUserService {

  constructor() { }

  /**
   * Get authenticated user
   */
  getAuthenticatedUserToken(): any {
    return new Promise((resolve, reject) => {
      Auth.currentSession().then(res => {
        let accessToken = res.getAccessToken();
        let jwt = accessToken.getJwtToken();
        resolve(jwt);
      }).catch(error=>{
        resolve(error);
      });
    })

  }
}
