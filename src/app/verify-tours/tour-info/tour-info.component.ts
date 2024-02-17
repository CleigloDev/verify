import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Currency, Price, Status, Tours } from '../../../lib/model';

@Component({
  standalone: true,
  selector: 'tour-info',
  template: `
    <div *ngFor="let tour of tours; trackBy: trackByTour">
      <div class="tour-table">
        <div class="column">
          <h3>Tour code</h3>
          <span>
            {{tour.code}}
          </span>
        </div>

        <div class="column">
          <h3>Data</h3>
          <span>
            {{ tour.startingDate }}/{{ tour.endingDate }}
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
  `,
  styleUrls: ['./tour-info.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TourInfoComponent {
  @Input() tours: Tours[] = [];

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
