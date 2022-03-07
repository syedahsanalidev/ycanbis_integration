import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AwsApiLinks } from '../../config/aws-urls';

@Injectable({
  providedIn: 'root'
})
export class SocialLinkdedinService {
  
  apiURL = environment.awsTwitterApiUrl;
  constructor(private _httpClient: HttpClient) { }

  /**
  * Get my tweets list
  * @param mySbuData 
  * @returns 
  */

  getMySubscriptionList(AccessToken: any, filter: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(AwsApiLinks.socialSubscriptionUrl, filter, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }

  /**
   * 
   * Getting social sub data
   * @param filter 
   * @returns 
   */
  getSocialSubData(filter: any, AccessToken: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/social/account/company/social/subcription/data`, filter, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }

  /**
   * 
   * Getting social sub data
   * @param filter 
   * @returns 
   */
  addMySocialSubData(mySbuData: any, AccessToken: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/social/account/add/user/social/subcription`, mySbuData, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }


  /**
   * 
   * Getting social sub data
   * @param filter 
   * @returns 
   */
  deleteMySocialSubData(mySbuData: any, AccessToken: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/social/account/delete/user/social/subcription`, mySbuData, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }

  /**
   * Add Social subs group
   */
  addSocialGroup(socialGroupData: any, AccessToken: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/social/account/add/user/social/subcription/group`, socialGroupData, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }


  /**
   * Delete social group
   */

  deleteSocialGroup(socialGroupData: any, AccessToken: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/social/account/delete/user/social/subcription/group`, socialGroupData, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }

  /**
   * Add to my favorite
   * @param favortiesObject 
   * @returns 
   */

  addTofavorites(favoriteObject: any, AccessToken: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/social/account/add/user/social/favorite`, favoriteObject, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }

  /**
   * Get my social count
   * @param favoriteObject 
   * @returns 
   */

  getMySocialCount(favoriteObject: any, AccessToken: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/social/account//get/user/social/category/data/count`, favoriteObject, {
      headers: new HttpHeaders()
        .set('AccessToken', AccessToken),
      observe: 'response'
    });
  }
}
