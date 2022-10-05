import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path:'Tab1Page',
    component:Tab1Page,
  }
  // {
  //   path:'Tab1Page',
  //   loadChildren: () => import('../tab1/tab1.module').then(m=>m.Tab1PageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
