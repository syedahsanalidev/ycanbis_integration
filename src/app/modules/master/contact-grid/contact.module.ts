import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ContactRoutingModule } from "./contact.routing.module";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    ContactComponent,
  ]
})
export class ContactModule {}
