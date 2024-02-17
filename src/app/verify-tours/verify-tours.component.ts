import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Status, Tours } from '../../lib/model';
import { WeroadService } from '../service';

@Component({
  selector: 'verify-tours',
  template: `
    <div *ngFor="let tour of tours$ | async; trackBy: trackByTour">
      <div>
        <span>
          {{tour.code}}
        </span>

        <span>
          {{tour.coordinatorName}} {{tour.coordinatorLastName}}
        </span>

        <span>
          {{tour.status}}
        </span>

        <span>
          {{tour.price}}
        </span>
      </div>
    </div>

    <div>
      <span>
        {{ 'Tours totali pubblicati: '}} {{ totalTours$ | async }}
      </span>

      <span>
        {{ 'Tours non confermati: '}} {{ toursToConfirm$ | async }}
      </span>
    </div>
    <button (click)="refreshTours()"> {{ 'Aggiorna Dati' }}</button>
  `,
  styleUrls: ['./verify-tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyToursComponent implements OnInit {

  protected tours$: Observable<Tours[]> = this.weroadService.tours$;
  protected totalTours$ = this.tours$.pipe(
    map(tours => tours.length),
  );
  protected toursToConfirm$ = this.tours$.pipe(
    map(tours => {
      return tours.filter(tour => tour.status === Status.AlmostConfirmed || tour.status === Status.Planned)
    })
  );
  
  constructor(
    private weroadService: WeroadService,
  ){}

  ngOnInit(): void {
    this.weroadService.init();
  }

  protected refreshTours() {
    this.weroadService.refreshTours();
  }

  protected trackByTour(_: number, tour: Tours) {
    return tour.id;
  }
}
