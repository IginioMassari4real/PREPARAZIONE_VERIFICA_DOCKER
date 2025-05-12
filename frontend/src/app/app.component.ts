import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{ message }}</div>`,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.get<any>('https://5000-iginiomassa-preparazion-aota57b5mov.ws-eu118.gitpod.io/api/data').subscribe(data => {
      this.message = data.message;
    });
  }
}
