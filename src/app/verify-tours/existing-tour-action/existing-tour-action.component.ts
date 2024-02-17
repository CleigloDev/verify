import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReplaySubject, filter, map } from 'rxjs';
import { Status, Tours } from '../../../lib/model';
import { WeroadService } from '../../service';

@Component({
  standalone: true,
  selector: 'existing-tours-actions',
  template: `
    <h2>{{'Nome tour: '}} {{ tourName$ | async }}</h2>
    <div class="tour-container">
      <span>
        {{ 'Tours totali pubblicati: '}} {{ totalTours$ | async }}
      </span>

      <span>
        {{ 'Tours non confermati: '}} {{ toursToConfirm$ | async }}
      </span>
    </div>
    <div class="buttons-container">
      <button class="refresh-tours" (click)="refreshTours()"> {{ 'Aggiorna Dati' }}</button>
      <button (click)="showAllTours()"> {{ 'Mostra tour' }}</button>
    </div>
  `,
  styleUrls: ['./existing-tour-action.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ExistingToursComponent {
  @Input() set tours(value: Tours[]) {
    this.tours$.next(value);
  }

  @Output() showToursInfo: EventEmitter<boolean> = new EventEmitter();

  private showingTours = false;
  private tours$ = new ReplaySubject<Tours[]>(1);

  protected totalTours$ = this.tours$.pipe(
    map(tours => tours.length),
  );
  protected toursToConfirm$ = this.tours$.pipe(
    map(tours => {
      return tours.filter(tour => tour.status === Status.AlmostConfirmed || tour.status === Status.Planned)
    }),
    map(tours => tours.length),
  );
  protected tourName$ = this.tours$.pipe(
    filter(tours => tours.length > 0),
    map(tours => tours[0].tourName),
  );
  
  constructor(
    private weroadService: WeroadService,
  ){}

  protected refreshTours() {
    this.weroadService.refreshTours();
  }

  protected showAllTours() {
    this.showingTours = !this.showingTours;
    this.showToursInfo.next(this.showingTours);
  }
}
