import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook/facebook.component';
import { PolicyComponent } from './policy/policy.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule, ToastrService } from 'ngx-toastr';
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
    FacebookRoutingModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule,
    AccordionModule,
    PaginationModule,
    FormsModule,
    TooltipModule,
    ReactiveFormsModule,
    NgSelectModule,
    ToastrModule.forRoot()
  ],
  providers: [ToastrService,{
    provide: APP_INITIALIZER,
    useFactory: initializeAppFactory,
    multi: true,
    deps: [FacebookService, DOCUMENT],
  }],
})
export class FacebookModule { }
