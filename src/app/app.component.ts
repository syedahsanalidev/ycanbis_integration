import { Component } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { SocialTwitterService } from './helper/http/social-twitter/social-twitter.service';
import { AwsCognitoAuthenticatedUserService } from './helper/services/AwsCognitoAuthenticatedUser/aws-cognito-authenticated-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private socialTwitterService: SocialTwitterService,
    private AwsCognitoAuthenticatedUserService: AwsCognitoAuthenticatedUserService) {
   // this.getMyTweets();
    this.checkForLogin();
  }


  async checkForLogin() {

  }

  /**
   * Fetching access token
   * And sending for request to get the data
   */
  async getMyTweets() {
    let accessToken = await this.AwsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
    // this.socialTwitterService.getMySubscriptionList(accessToken).subscribe(tweets => {
    //   console.log(tweets);
    // })
  }
}
