import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Tours, deserializeToursJson } from '../model/tours.io';

const URL: string = 'https://api-catalog.weroad.it/travels';

@Injectable({
  providedIn: 'root',
})
export class WeroadApiService {

  listTours(tourId: string = 'cile-bolivia-weroadx'): Observable<Tours[]> {
    const iframe = document.getElementById('data-tours') as any;
    if(!iframe) {
      return of([]);
    }
    // iframe.src = `${URL}/${tourId}/tours`;
    const tours = localStorage.getItem('tours');
    if(!tours) return of([]);

    return of(JSON.parse(tours)).pipe(
      map(deserializeToursJson),
    );
  }
}
