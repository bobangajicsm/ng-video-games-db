import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList() {
    const params = new HttpParams().set('ordering', 'metacrit');

    return this.http.get(
      `https://rawg-video-games-database.p.rapidapi.com/games`,
      { params: params }
    );
  }
}
