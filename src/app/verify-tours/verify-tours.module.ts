import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyToursComponent } from './verify-tours.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: VerifyToursComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [VerifyToursComponent],
  exports: [VerifyToursComponent],
})
export class VerifyToursModule {}
