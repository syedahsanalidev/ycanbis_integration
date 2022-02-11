import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook/facebook.component';
import { PolicyComponent } from './policy/policy.component';

import { ExtendedWindow } from './models';
import { FacebookService } from './facebook.service';
import { DOCUMENT } from '@angular/common';

function initializeAppFactory(fb: FacebookService, doc: Document): () => Promise<void> {
  return () => new Promise<void>((resolve) => {

    const extendedWindow: ExtendedWindow = window as unknown as ExtendedWindow;
    extendedWindow.fbAsyncInit = () => {
      fb.init(extendedWindow.APP_ID , extendedWindow.FB_TOKEN);
      fb.logIn().then(resolve);
    };

    fb.injectScripts(doc);
  });
}

@NgModule({
  declarations: [
    FacebookComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    FacebookRoutingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    multi: true,
    deps: [FacebookService, DOCUMENT],
  }],
})
export class FacebookModule { }
