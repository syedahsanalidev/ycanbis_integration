import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/master/master.module').then(mod => mod.MasterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./modules/master/authentication/authentication.module').then(mod => mod.AuthenticationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
