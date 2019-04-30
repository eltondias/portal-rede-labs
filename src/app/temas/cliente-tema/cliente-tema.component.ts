import { Router } from '@angular/router';
import { AutenticarComponent } from './../../cliente/autenticar/autenticar.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-cliente-tema',
  templateUrl: './cliente-tema.component.html',
  styleUrls: ['./cliente-tema.component.css']
})
export class ClienteTemaComponent implements OnInit {

  constructor(public dialog: MatDialog,     private _router: Router,) {}


  ngOnInit() {
  }

  // abrirAutenticacao() {


  //   this._router.navigateByUrl('/autenticacao/login');

  //   // const dialogRef = this.dialog.open(AutenticarComponent, {
  //   //   data: {}
  //   // });

  //   // dialogRef.afterClosed().subscribe(result => {
  //   //    console.log(result);
  //   // });
  // }

}
