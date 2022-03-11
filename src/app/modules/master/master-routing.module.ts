import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { TimelineComponent } from './timeline/timeline.component';
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
        component: TimelineComponent,
        data: {
          title: 'Timeline',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Timeline' }
          ]
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
