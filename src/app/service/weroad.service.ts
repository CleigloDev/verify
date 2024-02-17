import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, EMPTY, ReplaySubject, catchError, switchMap } from 'rxjs';
import { WeroadApiService } from '../../lib/api';
import { computeRouterParams } from '../../lib/common';

const WEROAD_ID = 'WEROAD_ID';

@Injectable()
export class WeroadService {
  private _fetchToursSubject$ = new BehaviorSubject<void>(undefined);
  private tourId$ = new ReplaySubject<string>(1);

  tours$ = this.tourId$.pipe(
    switchMap((tourId) => this._fetchToursSubject$.pipe(
      switchMap(_ => {
        return this.weroadApiService.listTours(tourId);
      }),
    )),
    catchError(_ => {
      return EMPTY;
    }),
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
