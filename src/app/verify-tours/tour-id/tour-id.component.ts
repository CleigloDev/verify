import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DEFAULT_TOUR } from '../../../lib/api';
import { WeroadService } from '../../service';

@Component({
  standalone: true,
  selector: 'tour-id',
  template: `
    <h2>{{'Inserisci nome tour'}}</h2>
    <form [formGroup]="form">
      <input
        class="input-tour"
        formControlName="tourId"
      />
    </form>
    <button
      class="update-tour"
      (click)="updateTourId()"
    >
      {{ 'Cerca tour' }}
    </button>
  `,
  styleUrls: ['./tour-id.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TourIdComponent {
  protected form = this.formBuilder.group({
    tourId: new FormControl(DEFAULT_TOUR, {
      nonNullable: true,
    })
  });

  constructor(
    private weroadService: WeroadService,
    private formBuilder: FormBuilder,
  ){}

  protected updateTourId() {
    const tourId = this.form.controls.tourId.value;
    this.weroadService.updateTourId(tourId);
  }
}
