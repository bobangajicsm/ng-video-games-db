import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-video-games-db';

  ngOnInit() {
    fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H",
		"x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
  }
}
