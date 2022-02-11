import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstagramComponent } from './instagram/instagram.component';
import { PolicyComponent} from "./policy/policy.component";

const routes: Routes = [
  { path: 'policy', component: PolicyComponent },
  { path: '', component: InstagramComponent },
  { path: '**', component: InstagramComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramRoutingModule { }
