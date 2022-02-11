import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramRoutingModule } from './instagram-routing.module';
import { InstagramComponent } from './instagram/instagram.component';
import { PolicyComponent } from './policy/policy.component';

import { ExtendedWindow } from './models';
import { InstagramService } from './instagram.service';
import { DOCUMENT } from '@angular/common';

function initializeAppFactory(fb: InstagramService, doc: Document): () => Promise<void> {
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
    InstagramComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    InstagramRoutingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    multi: true,
    deps: [InstagramService, DOCUMENT],
  }],
})
export class InstagramModule { }
