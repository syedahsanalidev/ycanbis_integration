import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';

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
        path: 'timeline',
        loadChildren: () => import('./timeline/timeline.module').then(mod => mod.TimelineModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
