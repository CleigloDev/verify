import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, ReplaySubject, combineLatest, switchMap } from 'rxjs';
import { WeroadApiService } from '../../lib/api';
import { computeRouterParams } from '../../lib/common';

const WEROAD_ID = 'WEROAD_ID';

@Injectable()
export class WeroadService {
  private _fetchToursSubject$ = new BehaviorSubject<void>(undefined);
  private tourId$ = new ReplaySubject<string>(1);

  tours$ = combineLatest([
    this._fetchToursSubject$,
    this.tourId$,
  ]).pipe(
    switchMap(([_, tourId]) =>
      this.weroadApiService.listTours(tourId)
    ),
  );
  
  constructor(
    private weroadApiService: WeroadApiService,
    private route: ActivatedRoute,
  ){}

  init() {
    const params = computeRouterParams(this.route.snapshot);
    this.tourId$.next(params[WEROAD_ID]);
  }

  refreshTours() {
    this._fetchToursSubject$.next();
  }
}
