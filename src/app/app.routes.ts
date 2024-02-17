import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: 'verify-tours',
    loadChildren: () => import('./verify-tours/verify-tours.module').then(mod => mod.VerifyToursModule),
  }],
}];
