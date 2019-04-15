import { Laboratorio } from './../../model/laboratorio.model';
import { Ensaio } from './../../model/ensaio.model';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  servicos: Ensaio[] = [];
  laboratorios: Laboratorio[] = [];
  newListLabs: Laboratorio[] = [];

  tipoBusca = 0;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  options: string[] = [];


  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getServicos();
    this.getLaboratorios();

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  getServicos() {
    this.api.getEnsaios().subscribe(servicos => {
      this.servicos = servicos;
    });
  }

  getLaboratorios() {
    this.api.getLaboratorios().subscribe(laboratorios => {
      this.laboratorios = laboratorios;
      this.selecionarTipoBusca(this.tipoBusca);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  selecionarTipoBusca(tipo){
    this.tipoBusca = tipo;
    this.options = [];

    if(this.tipoBusca === 0) {
      this.laboratorios.forEach(lab => {
        this.options.push(lab.nome + '-' + lab.sigla + '|' + lab.id);
      });
    } else {
      this.servicos.forEach(serv => {
        this.options.push(serv.nome+ '|' + serv.id);
      });
    }

    console.log( this.options);

  }


  opcaoSelecionada(opcao){
    const array  =  opcao.split('|');
    console.log(array);
    this.router.navigate(['/laboratorio-page/' + array[1]]);

    // window.location.href = '/laboratorio-page/' + array[1];

  }
  

}
