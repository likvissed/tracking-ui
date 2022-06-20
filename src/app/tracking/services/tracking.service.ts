import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class TrackingService {
  constructor(
    private http: HttpClient
  ) {}

  getListTrackings(data: any) {
    const url = `${environment.apiUrl}/track_list_full`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url,  { headers: headers, params: data });
  }

  getHistoryTrackings(id: number) {
    const url = `${environment.apiUrl}/track_history`;

    return this.http.get(`${url}?id=${id}`)
  }

  sentDeliveryEmail(data: any) {
    const url = `${environment.apiUrl}/email_delivery`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')

    return this.http.put(url, data , { headers })
  }
}
