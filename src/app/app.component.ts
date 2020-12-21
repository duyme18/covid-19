import { Component } from '@angular/core';
import { ServerHttpService } from './server-http.service';

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
}
