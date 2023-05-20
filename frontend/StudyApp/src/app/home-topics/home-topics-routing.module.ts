import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTopicsPage } from './home-topics.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTopicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTopicsPageRoutingModule {}
