import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ExistingToursComponent } from './existing-tour-action/existing-tour-action.component';
import { TourIdComponent } from './tour-id/tour-id.component';
import { TourInfoComponent } from './tour-info/tour-info.component';
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
    ReactiveFormsModule,
    TourIdComponent,
    ExistingToursComponent,
    TourInfoComponent,
  ],
  declarations: [VerifyToursComponent],
  exports: [VerifyToursComponent],
})
export class VerifyToursModule {}
