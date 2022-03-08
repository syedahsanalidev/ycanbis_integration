import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { ProfileComponent } from "./Profile/profile/profile.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: "/motherboard",
    pathMatch: 'full',
  },
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
      },
      {
        path: 'social/facebook',
        loadChildren: () => import('./my-social-subscription/facebook/facebook.module').then(mod => mod.FacebookModule)
      },
      {
        path: 'social/instagram',
        loadChildren: () => import('./my-social-subscription/instagram/instagram.module').then(mod => mod.InstagramModule)
      },
      {
        path: 'social/linkedin',
        loadChildren: () => import('./my-social-subscription/linkedin/linkedin.module').then(mod => mod.LinkedinModule)
      },
      {
        path: 'Profile',
        loadChildren: () => import('./Profile/profile.module').then(mod => mod.ProfileModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
