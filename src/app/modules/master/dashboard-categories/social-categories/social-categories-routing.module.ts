import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialCategoriesComponent } from './social-categories/social-categories.component';

const routes: Routes = [
  {
    path: "",
    component: SocialCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialCategoriesRoutingModule { }
