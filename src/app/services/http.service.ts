import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, forkJoin, merge } from 'rxjs';
import { concatMap, map, reduce } from 'rxjs/operators';

const BASE_URL = 'https://rawg-video-games-database.p.rapidapi.com';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getGameList(ordering: string, search?: string) {
    let params = new HttpParams().set('ordering', ordering);
  
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get(`${BASE_URL}/games`, { params: params });
  }

  getGameDetails(id: string) {
    const gameInfoRequest = this.http.get(`${BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(`${BASE_URL}/games/${id}/movies`);
    const gameScreenshotsRequest = this.http.get(
      `${BASE_URL}/games/${id}/screenshots`
    );

    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest,
    }).pipe(
      map((resp: any) => {
        console.log(resp);
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailersRequest']?.results,
        };
      })
    );
  }
}
