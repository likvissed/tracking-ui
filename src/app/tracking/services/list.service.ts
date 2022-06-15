import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ListService {
  constructor(
    private http: HttpClient
  ) {}

  getListTrackings() {
    const url = `${environment.apiUrl}/track_list_full`;

    return this.http.get(url);
  }
}
