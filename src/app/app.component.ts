import { Component, OnInit } from '@angular/core';
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
    this.httpService.getGameList().subscribe((gameList) => {
      console.log(gameList);
      this.games = gameList['results'];
    });
  }
}
