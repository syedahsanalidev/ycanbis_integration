import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FullcalendarRoutingModule } from "./fullcalendar.routing.module";
import { FullcalendarComponent } from "./fullcalendar.component";
import {CalendarModule, DateAdapter} from "angular-calendar";
import { FlatpickrModule } from "angularx-flatpickr";
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { CalendarFormDialogComponent } from "./calendar-form-dialog/calendar-form-dialog.component";


@NgModule({
  imports: [
    CommonModule,
    FullcalendarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlatpickrModule.forRoot(),
  ],
  declarations: [
    FullcalendarComponent,
    // CalendarFormDialogComponent
  ]
})
export class FullcalendarModule {}
