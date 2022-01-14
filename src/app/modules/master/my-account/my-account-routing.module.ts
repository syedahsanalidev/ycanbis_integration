import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../my-social-connect/my-social-connect.module').then(mod => mod.MySocialConnectModule)
      },

      {
        path: 'social-subscription',
        loadChildren: () => import('../my-social-subscription/my-social-subscription.module').then(mod => mod.MySocialSubscriptionModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
