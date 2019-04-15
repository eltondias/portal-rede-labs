import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  authToken = localStorage.getItem('auth_token');

  constructor (
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    // console.log('App iniciado');
    // if (this.authToken === null ) {
    //   this.http.post<any[]>(environment.urlApiSistemaInterno +  'authenticate', {'password': 'admin', 'rememberMe': true, 'username': 'admin'
    //   }).subscribe((token: any) => {
    //     localStorage.setItem('auth_token', token.id_token);
    //   });
    // }
    // console.log(this.authToken);
  }

}
