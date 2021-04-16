import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public games;

  constructor(private httpService: HttpService, private router: Router) {}

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

  openGameDetails(id: string) {
    this.router.navigate(['details', id]);
  }

}
