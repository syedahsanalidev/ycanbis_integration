import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "motherboard",
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard-categories/social-categories/social-categories.module').then(mod => mod.SocialCategoriesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
