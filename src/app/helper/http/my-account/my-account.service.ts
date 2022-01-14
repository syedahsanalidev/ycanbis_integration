import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  apiURL = environment.awsTwitterApiUrl;
  constructor(private _httpClient: HttpClient) { }

  /**
   * 
   * Getting social sub data
   * @param filter 
   * @returns 
   */
  getSocialSubData(filter: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account/company/social/subcription/data`, filter);
  }

  /**
   * 
   * Getting social sub data
   * @param filter 
   * @returns 
   */
  addMySocialSubData(mySbuData: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account/add/user/social/subcription`, mySbuData);
  }


  /**
   * 
   * Getting social sub data
   * @param filter 
   * @returns 
   */
  deleteMySocialSubData(mySbuData: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account/delete/user/social/subcription`, mySbuData);
  }
  /**
   * Get my subs list
   * @param mySbuData 
   * @returns 
   */

  getMySubscriptionList(mySbuData: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account/get/user/social/subcription/twitter`, mySbuData);
  }

  /**
   * Add Social subs group
   */
  addSocialGroup(socialGroupData: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account/add/user/social/subcription/group`, socialGroupData);
  }


  /**
   * Delete social group
   */

  deleteSocialGroup(socialGroupData: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account/delete/user/social/subcription/group`, socialGroupData);
  }

  /**
   * Add to my favorite
   * @param favortiesObject 
   * @returns 
   */

  addTofavorites(favoriteObject: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account/add/user/social/favorite`, favoriteObject);
  }

  /**
   * Get my social count
   * @param favoriteObject 
   * @returns 
   */

  getMySocialCount(favoriteObject: any): Observable<any> {
    return this._httpClient.post<Observable<any>>(`${this.apiURL}/account//get/user/social/category/data/count`, favoriteObject);
  }

}
