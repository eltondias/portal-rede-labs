import { MatDialog } from '@angular/material';
import { LaboratorioService } from './../../services/laboratorio.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Laboratorio } from 'src/app/model/laboratorio.model';
import { UpdateLaboratorioComponent } from '../update-laboratorio/update-laboratorio.component';

@Component({
  selector: 'app-lista-laboratorios',
  templateUrl: './lista-laboratorios.component.html',
  styleUrls: ['./lista-laboratorios.component.css']
})
export class ListaLaboratoriosComponent implements OnInit {

  usuario: Account =  JSON.parse(localStorage.getItem('account'));
  laboratorios: Laboratorio[] = [];

  constructor(
    private api: LaboratorioService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.usuario);
    this.listarLaboratorios();
  }

  listarLaboratorios() {
    this.api.getLaboratorios(this.usuario).subscribe(labs => {
   
      this.laboratorios = labs;
      console.log(this.laboratorios );
    });
  }

  editar(lab) {
    const dialogRef = this.dialog.open(UpdateLaboratorioComponent, { 
        data: {lab: lab}
    });

    dialogRef.afterClosed().subscribe(labResult => {
      if (labResult) {
        const indice =  this.laboratorios.indexOf(lab);
        this.laboratorios[indice] = labResult;
        console.log(indice );
      }
    });
  }

  cadastrarLaboratorio(){
    const dialogRef = this.dialog.open(UpdateLaboratorioComponent, { 
      data: {lab: new Laboratorio()}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listarLaboratorios();
    });
  }


  deleteLab(lab: Laboratorio) {
    if(confirm("Tem certeza que deseja remover o laboratório: " + lab.nome)) {
      this.api.delete(lab.id).subscribe(() => {
        this.listarLaboratorios();
      });
    }
  }


}
