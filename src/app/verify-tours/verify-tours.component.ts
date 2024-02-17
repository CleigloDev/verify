import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { Tours } from '../../lib/model';
import { WeroadService } from '../service';

@Component({
  selector: 'verify-tours',
  template: `
    <tour-id></tour-id>
    <ng-container *ngIf="tours$ | async as tours">
      <existing-tours-actions 
        [tours]="tours"
        (showToursInfo)="showTourInfo($event)"></existing-tours-actions>
      <tour-info 
        *ngIf="showTourInfo$ | async"
        [tours]="tours"
      ></tour-info>
    </ng-container>
  `,
  styleUrls: ['./verify-tours.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyToursComponent implements OnInit {
  protected tours$: Observable<Tours[]> = this.weroadService.tours$.pipe(
    shareReplay({refCount: true, bufferSize: 1}),
  );
  protected showTourInfo$ = new BehaviorSubject<boolean>(false);
  
  constructor(
    private weroadService: WeroadService,
  ){}

  ngOnInit(): void {
    this.weroadService.init();
  }

  protected showTourInfo(showInfo: boolean) {
    this.showTourInfo$.next(showInfo);
  }
}
