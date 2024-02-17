import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, shareReplay } from 'rxjs';
import { Currency, Price, Status, Tours } from '../../lib/model';
import { WeroadService } from '../service';

@Component({
  selector: 'verify-tours',
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
    
    <ng-container *ngIf="showAllTours$ | async">
      <div *ngFor="let tour of tours$ | async; trackBy: trackByTour">
        <div class="tour-table">
          <div class="column">
            <h3>Tour code</h3>
            <span>
              {{tour.code}}
            </span>
          </div>

          <div class="column">
            <h3>Nome e cognome</h3>
            <span>
              {{tour.coordinatorName}} {{tour.coordinatorLastName}}
            </span>
          </div>

          <div class="column">
            <h3>status</h3>
            <span>
              {{ getStatusText(tour.status) }}
            </span>
          </div>

          <div class="column">
            <h3>Prezzo</h3>
            <span>
              {{ getEURPrice(tour.price) }}
            </span>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./verify-tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyToursComponent implements OnInit {
  private showingTours = false;
  protected showAllTours$ = new BehaviorSubject<boolean>(this.showingTours);

  protected tours$: Observable<Tours[]> = this.weroadService.tours$.pipe(
    shareReplay({refCount: true, bufferSize: 1}),
  );
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

  ngOnInit(): void {
    this.weroadService.init();
  }

  protected refreshTours() {
    this.weroadService.refreshTours();
  }

  protected showAllTours() {
    this.showingTours = !this.showingTours;
    this.showAllTours$.next(this.showingTours);
  }

  protected trackByTour(_: number, tour: Tours) {
    return tour.id;
  }

  protected getStatusText(status: Status) {
    switch(status) {
      case Status.AlmostConfirmed:
        return "Quasi confermato";

      case Status.AlmostFull:
        return "Almost full";
        
      case Status.Confirmed:
        return "Confermato";

      case Status.Planned:
        return "Pianificato";

      case Status.SoldOut:
        return "Sold out";

      default: return status;
    }
  }

  protected getEURPrice(prices: Price[]) {
    return prices.find(price => price.currency === Currency.EUR)?.price;
  }
}
