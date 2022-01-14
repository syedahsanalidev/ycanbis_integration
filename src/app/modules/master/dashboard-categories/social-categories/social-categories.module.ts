import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialCategoriesRoutingModule } from './social-categories-routing.module';
import { SocialCategoriesComponent } from './social-categories/social-categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SocialCategoriesComponent
  ],
  imports: [
    CommonModule,
    SocialCategoriesRoutingModule,
    FontAwesomeModule
  ]
})
export class SocialCategoriesModule { }
