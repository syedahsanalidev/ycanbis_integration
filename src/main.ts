import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, { Auth } from 'aws-amplify';


Auth.configure({
  mandatorySignIn: true,
  region: "ca-central-1",
  userPoolId: "ca-central-1_mBmGT6ctL",
  userPoolWebClientId: environment.userPoolWebClientId
});
const oauth = {
  // Domain name
  domain: environment.awsCognitoDomain,
  // Authorized scopes
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  // Callback URL
  redirectSignIn: environment.awsCognitoRedirectSignIn,
  // Sign out URL
  redirectSignOut: environment.awsCognitorRedirectSignOut,

  // 'code' for Authorization code grant, 
  // 'token' for Implicit grant
  responseType: 'code',

  // optional, for Cognito hosted ui specified options
  options: {
    // Indicates if the data collection is enabled to support Cognito advanced security features. By default, this flag is set to true.
    AdvancedSecurityDataCollectionFlag: true
  }
}

Auth.configure({
  oauth: oauth
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
