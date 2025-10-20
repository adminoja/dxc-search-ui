import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const appRoutes: Routes = [
  {
    path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/'
  }
]
@NgModule({
  imports: [

    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: false, onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
