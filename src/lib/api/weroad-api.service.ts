import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tours } from '../model/tours.io';

const URL: string = 'https://corsproxy.io/?https://api-catalog.weroad.it/travels';

@Injectable({
  providedIn: 'root',
})
export class WeroadApiService {
  
  constructor(
    private http: HttpClient,
  ){}

  listTours(tourId: string = 'maldive-beach-life-weroadx'): Observable<Tours[]> {
    // let headers = new HttpHeaders()
    // .set('Access-Control-Allow-Origin', '*')
    // .set('Access-Control-Allow-Methods', 'GET',);

    // return this.http.get<TourResponseJson>(`${URL}/${tourId}/tours`, {
    //   // headers,
    // }).pipe(
    //   map(tours => deserializeToursJson(tours))
    // )
    // var iframe = document.createElement('iframe');
    // var html = `<iframe is="x-frame-bypass" src=${URL}/${tourId}/tours></iframe>`;
    // document.body.appendChild(iframe);
    // iframe.contentWindow?.document.open();
    // iframe.contentWindow?.document.write(html);
    // console.log(document.body.childElementCount);
    return of([]);
  }
}
