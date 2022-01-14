import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from 'src/app/shared/components/side-nav/side-nav.component';


@NgModule({
  declarations: [
    MasterComponent,SideNavComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HeaderModule,
    FooterModule,
    FontAwesomeModule
  ]
})
export class MasterModule { }
