import { ApiService } from './../../services/api.service';
import { LOGIN_ALREADY_USED_TYPE, EMAIL_ALREADY_USED_TYPE, CPF_ALREADY_USED_TYPE } from './../../constants/error.constants';
import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit, AfterViewInit {
  confirmPassword: string;
  doNotMatch: string;
  error: string;
  errorEmailExists: string;
  errorUserExists: string;
  errorCpfExists: string;
  registerAccount: any;
  success: boolean;
  modalRef: NgbModalRef;

  constructor(
      private api: ApiService,
      private elementRef: ElementRef,
      private renderer: Renderer
  ) {}

  ngOnInit() {
      this.success = false;
      this.registerAccount = {};
  }

  ngAfterViewInit() {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#firstname'), 'focus', []);
  }

  register() {
      if (this.registerAccount.password !== this.confirmPassword) {
          this.doNotMatch = 'ERROR';
      } else {
          this.doNotMatch = null;
          this.error = null;
          this.errorUserExists = null;
          this.errorEmailExists = null;
          this.errorCpfExists = null;
        
          this.registerAccount.langKey = 'pt-br';
          this.api.registarConta(this.registerAccount).subscribe(
            () => {
                this.success = true;
            },
            response => this.processError(response)
        );
      }
  }

  openLogin() {
    alert('login');
      //this.modalRef = this.loginModalService.open();
  }

  private processError(response: HttpErrorResponse) {
      this.success = null;
      if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
          this.errorUserExists = 'ERROR';
      } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
          this.errorEmailExists = 'ERROR';
      } else if (response.status === 400 && response.error.type === CPF_ALREADY_USED_TYPE) {
          this.errorCpfExists = 'ERROR';
      } else {
          this.error = 'ERROR';
      }
  }

  previousState() {
      window.history.back();
  }
}
