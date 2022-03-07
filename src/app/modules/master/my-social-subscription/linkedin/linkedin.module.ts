import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkedinRoutingModule } from './linkedin-routing.module';
import { LinkedinComponent } from './linkedin/linkedin.component';

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


@NgModule({
  declarations: [
    LinkedinComponent
  ],
  imports: [
    CommonModule,
    LinkedinRoutingModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers : [ToastrService]
})
export class LinkedinModule { }
