import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit, Inject, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent implements AfterViewInit {

  authenticationError: boolean;
  password: string;
  rememberMe: boolean;
  username: string;
  credentials: any;

  constructor(
      private loginService: ApiService,
      private elementRef: ElementRef,
      private renderer: Renderer,
      private router: Router,
     
    public dialogRef: MatDialogRef<AutenticarComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.credentials = {};
    }

  fechar(): void {
    this.dialogRef.close();
  }


 

  ngAfterViewInit() {
      setTimeout(() => this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []), 0);
  }

  cancel() {
      this.credentials = {
          username: null,
          password: null,
          rememberMe: true
      };
      this.authenticationError = false;
  }

  login() {
      this.loginService
          .login({
              username: this.username,
              password: this.password,
              rememberMe: this.rememberMe
          })
          .then((response) => {
              this.authenticationError = false;  
              console.log(response);          
              // window.location.href = 'http://rededelabolatorios-env.h7qiim6mwv.sa-east-1.elasticbeanstalk.com'; 
          })
          .catch(() => {
              this.authenticationError = true;
          });
  }

 
}
