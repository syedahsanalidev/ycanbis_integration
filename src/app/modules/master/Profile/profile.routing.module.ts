import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: '**', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

//
// import { Routes } from '@angular/router';
//
// // import { HelperclassesComponent } from './helper-classes/hc.component';
// // import { InvoiceComponent } from './invoice/invoice.component';
// import { ProfileComponent } from './profile/profile.component';
// // import { PricingComponent } from './pricing/pricing.component';
//
// export const SamplePagesRoutes: Routes = [
//   {
//     path: '',
//     children: [
//       // {
//       //   path: 'helperclasses',
//       //   component: HelperclassesComponent,
//       //   data: {
//       //     title: 'Helper Classes',
//       //     urls: [
//       //       { title: 'Dashboard', url: '/dashboard' },
//       //       { title: 'Helper Classes' }
//       //     ]
//       //   }
//       // },
//       // {
//       //   path: 'invoice',
//       //   component: InvoiceComponent,
//       //   data: {
//       //     title: 'Invoice',
//       //     urls: [
//       //       { title: 'Dashboard', url: '/dashboard' },
//       //       { title: 'Invoice Page' }
//       //     ]
//       //   }
//       // },
//       {
//         path: 'profile',
//         component: ProfileComponent,
//         data: {
//           title: 'Profile',
//           urls: [
//             { title: 'Dashboard', url: '/dashboard' },
//             { title: 'Profile Page' }
//           ]
//         }
//       },
//       // {
//       //   path: 'pricing',
//       //   component: PricingComponent,
//       //   data: {
//       //     title: 'Pricing',
//       //     urls: [
//       //       { title: 'Dashboard', url: '/dashboard' },
//       //       { title: 'Pricing Page' }
//       //     ]
//       //   }
//       // }
//     ]
//   }
// ];
