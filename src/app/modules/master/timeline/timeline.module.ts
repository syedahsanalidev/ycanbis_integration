import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimelineRoutes } from './timeline.routing';

import { LeftComponent } from './left/left.component';


@NgModule({
  imports: [CommonModule, RouterModule.forChild(TimelineRoutes)],
  declarations: [LeftComponent]
})
export class TimelineModule { }
