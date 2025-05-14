import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.get<any>('https://5000-iginiomassa-preparazion-m4eoz4k2fz7.ws-eu118.gitpod.io/api/data').subscribe(data => {
      this.message = data.message;
    });
  }
}
