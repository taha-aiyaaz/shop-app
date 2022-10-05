import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'cal-model',
    loadChildren: () => import('./cal-model/cal-model.module').then( m => m.CalModelPageModule)
  },
  {
    path: 'Tab2Page',
    loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
