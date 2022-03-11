import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { HeaderModule } from 'src/app/shared/modules/header/header.module';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from 'src/app/shared/components/side-nav/side-nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TimelineComponent } from './timeline/timeline.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    MasterComponent, SideNavComponent, TimelineComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HeaderModule,
    FooterModule,
    FontAwesomeModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule

  ]
})
export class MasterModule { }
