import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSidenav } from '../../../../node_modules/@angular/material';
import {
  Router,
  NavigationStart,
  NavigationEnd
} from '../../../../node_modules/@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-tema',
  templateUrl: './admin-tema.component.html',
  styleUrls: ['./admin-tema.component.css']
})
export class AdminTemaComponent implements OnInit {
  constructor(private _router: Router) {}
  @ViewChild('sidenav')
  sidenav: MatSidenav;
  height: number;
  width: number;
  paginas: HeaderAdmin[] = [];
  paginaAtual = new HeaderAdmin('Painel administrativo', '', 'menu');

  ngOnInit() {
     this.checkLogin();
  }

  close() {
    this.sidenav.close();
  }

  open(url: string) {
    if (url === '') {
      this.sidenav.open();
    } else {
      this._router.navigateByUrl(url);
    }
  }

  checkLogin() {

    const usuario: any =  JSON.parse(localStorage.getItem('account'));  

 
        if (!usuario) {
          this._router.navigateByUrl('autenticacao/login');
        } else {
          this.config();
        }
      
  }

  config() {

    this.height = window.screen.availHeight;
    this.width = window.screen.availWidth;
    this.paginas['admin'] = new HeaderAdmin('Painel administrativo', '', 'menu');
    this.paginas['dashboard'] = new HeaderAdmin('Painel administrativo', '', 'menu');
    this.paginas['login'] = new HeaderAdmin('Autenticação', '', 'menu');
    this.paginas['lista-laboratorios'] = new HeaderAdmin( 'Gerenciar laboratórios', '', 'menu');
    // this.paginas['gerenciar-usuarios'] = new HeaderAdmin('Gerenciar usuários', '', 'menu');
    this.paginas['update-laboratorio'] = new HeaderAdmin('Atualizar laboratório', '/admin/lista-laboratorios', 'keyboard_backspace');
    // this.paginas['editar-usuario'] = new HeaderAdmin('Editar usuário', '/admin/gerenciar-usuarios', 'keyboard_backspace');
    // this.paginas['gerenciar-fluxos'] = new HeaderAdmin('Gerenciar fluxos', '', 'menu');
    // this.paginas['criar-fluxo'] = new HeaderAdmin('Criar fluxo', '/admin/gerenciar-fluxos', 'keyboard_backspace');
    // this.paginas['editar-fluxo'] = new HeaderAdmin('Editar fluxo', '/admin/gerenciar-fluxos', 'keyboard_backspace');

    const href = window.location.pathname.split('/');

    if (href.length < 3) {
      this.paginaAtual = this.paginas['admin'];
    } else {
      this.paginaAtual = this.paginas[href[2]];
    }

    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const url = event.url.split('/');
        this.paginaAtual = this.paginas[url[2]];
        document.title = this.paginaAtual.header;
      }
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/');
        this.paginaAtual = this.paginas[url[2]];
        document.title = this.paginaAtual.header;
      }
    });

  }


  signOut() {
    localStorage.removeItem('account');  
    this._router.navigate(['/autenticacao/login']);
}

}


export class HeaderAdmin {
  header: string;
  back: string;
  icon: string;

  constructor(header, back, icon) {
    this.header = header;
    this.back = back;
    this.icon = icon;
  }
}
