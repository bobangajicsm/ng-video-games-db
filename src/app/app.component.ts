import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public games;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getGameList('metacrit').subscribe((gameList) => {
      this.games = gameList['results'];
    });
  }

  searchGames(search: string) {
    this.httpService.getGameList('metacrit', search).subscribe((gameList) => {
      this.games = gameList['results'];
    })
  }

}
