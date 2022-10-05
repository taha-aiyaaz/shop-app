import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalModelPage } from './cal-model.page';

const routes: Routes = [
  {
    path: '',
    component: CalModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalModelPageRoutingModule {}
