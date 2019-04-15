import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem: string;

  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;

  constructor(
    private _router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    const usuario: any = JSON.parse(localStorage.getItem('account'));
    if (!usuario) {
      this._router.navigateByUrl('autenticacao/login');
    } else {
      this._router.navigateByUrl('admin/dashboard');
    }
  }


  login() {
    this.api
      .login({
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      })
      .then((response: any) => {
        this.authenticationError = false;
        const token_admin = localStorage.getItem('auth_token');
        localStorage.setItem('auth_token_admin', token_admin);
        localStorage.setItem('auth_token', response.body.id_token);
        localStorage.setItem('logado', 'true');

        this.api.getAccount().subscribe((response: any) => {
          localStorage.setItem('account', JSON.stringify(response.body));
          const usuario: any = JSON.parse(localStorage.getItem('account'));
          console.log(usuario);
          this._router.navigateByUrl('admin/dashboard');
        });



        // window.location.href = 'http://rededelabolatorios-env.h7qiim6mwv.sa-east-1.elasticbeanstalk.com'; 
      })
      .catch(() => {
        this.authenticationError = true;
      });
  }


}
