import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, EMPTY, ReplaySubject, catchError, distinctUntilChanged, switchMap } from 'rxjs';
import { DEFAULT_TOUR, WeroadApiService } from '../../lib/api';
import { computeRouterParams } from '../../lib/common';

const WEROAD_ID = 'WEROAD_ID';

@Injectable({
  providedIn: 'root'
})
export class WeroadService {
  private _fetchToursSubject$ = new BehaviorSubject<void>(undefined);
  private _tourId$ = new ReplaySubject<string>(1);

  tours$ = this._tourId$.pipe(
    distinctUntilChanged(),
    switchMap((tourId) => this._fetchToursSubject$.pipe(
      switchMap(_ => {
        return this.weroadApiService.listTours(tourId);
      }),
    )),
    catchError(_ => {
      return EMPTY;
    }),
  );

  tourId$ = this._tourId$.asObservable();
  
  constructor(
    private weroadApiService: WeroadApiService,
    private route: ActivatedRoute,
  ){}

  init() {
    const params = computeRouterParams(this.route.snapshot);
    this._tourId$.next(params[WEROAD_ID] || DEFAULT_TOUR);
  }

  refreshTours() {
    this._fetchToursSubject$.next();
  }

  updateTourId(tourId: string) {
    this._tourId$.next(tourId);
  }
}
