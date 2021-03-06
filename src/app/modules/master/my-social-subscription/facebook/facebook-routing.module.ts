import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';
import { PolicyComponent} from "./policy/policy.component";

const routes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: '', component: FacebookComponent },
  { path: '**', component: FacebookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
