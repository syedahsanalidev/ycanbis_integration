import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinComponent } from './linkedin/linkedin.component';
const routes: Routes = [{
  path: "",
  component: LinkedinComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedinRoutingModule { }
