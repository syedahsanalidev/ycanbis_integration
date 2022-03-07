import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'redirect',
    component: RedirectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
