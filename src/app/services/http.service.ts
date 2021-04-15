



import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList(ordering: string, search?: string) {
    let params = new HttpParams().set('ordering', ordering);
    console.log(search);
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get(
      `https://rawg-video-games-database.p.rapidapi.com/games`,
      { params: params }
    );
  }
}
