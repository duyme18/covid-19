import { Component } from '@angular/core';
import { ServerHttpService } from './server-http.service';
import * as _ from 'lodash';

@Component({
  selector: 'covid19-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  public globalData: string[] = [];
  public countriesData: string[] = [];

  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit(): void {
    this.serverHttp.getSummary().subscribe((data) => {
      this.globalData = data.Global;
      this.countriesData = data.Countries;
      console.log(this.countriesData);
    });
  }

  public orderBy(key: string, dir: string) {
    if (dir === "asc") {
      this.countriesData = _.orderBy(this.countriesData, key, dir);
    } else if (dir === "desc") {
      this.countriesData = _.orderBy(this.countriesData, key, dir);
    }
  }
}
