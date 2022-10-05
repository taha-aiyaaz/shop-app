import { Tab2Page } from './tab2/tab2.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
   },

   {
    path:'Tab2Page',
    loadChildren:()=> import ('./tab2/tab2.module').then(m => m.Tab2PageModule)
   }

  // {
  //   path: 'cal-model',
  //   loadChildren: () => import('./app/tab1/cal-model/cal-model.module').then( m => m.CalModelPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
