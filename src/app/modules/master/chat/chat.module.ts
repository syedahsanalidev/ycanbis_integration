import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoMaterialModule } from "../../../demo-material-module";

import { ChatRoutingModule } from "./chat-routing.module";
import { ChatComponent } from "./chat.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ChatComponent
  ]
})
export class ChatModule {}
