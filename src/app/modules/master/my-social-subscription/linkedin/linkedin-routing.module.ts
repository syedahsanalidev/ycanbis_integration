import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { PolicyComponent} from "./policy/policy.component";

const routes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: '', component: LinkedinComponent },
  { path: '**', component: LinkedinComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedinRoutingModule { }
