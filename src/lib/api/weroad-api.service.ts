import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap, timer } from 'rxjs';
import { Tours, deserializeToursJson } from '../model/tours.io';

const URL: string = 'https://api-catalog.weroad.it/travels';

export const DEFAULT_TOUR = 'cile-bolivia-weroadx';

@Injectable({
  providedIn: 'root',
})
export class WeroadApiService {

  listTours(tourId: string = DEFAULT_TOUR): Observable<Tours[]> {
    const iframe = document.getElementById('data-tours') as any;
    if(!iframe) {
      return of([]);
    }
    iframe.src = `${URL}/${tourId}/tours`;
    

    return timer(500).pipe(
      switchMap(() => {
        const tours = localStorage.getItem('tours');
        if(!tours) return of([]);

        return of(JSON.parse(tours)).pipe(
          map(deserializeToursJson),
        );
      }),
    );
  }
}
