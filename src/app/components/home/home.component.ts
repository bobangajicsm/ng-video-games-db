import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public games;
  public sort: string;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.httpService.getGameList('metacrit').subscribe((gameList) => {
          this.games = gameList['results'];
        });
      }
    });
  }

  searchGames(sort: string, search?: string) {
    this.httpService.getGameList(sort, search).subscribe((gameList) => {
      this.games = gameList['results'];
    });
  }

  openGameDetails(id: string) {
    this.router.navigate(['details', id]);
  }
}
