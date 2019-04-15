import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Segmento } from './../../model/segmento.model';
import { Laboratorio } from './../../model/laboratorio.model';
import { Ensaio } from './../../model/ensaio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-laboratorios',
  templateUrl: './servicos-laboratorios.component.html',
  styleUrls: ['./servicos-laboratorios.component.css']
})
export class ServicosLaboratoriosComponent implements OnInit {
  getToken = true;
  servicos: Ensaio[] = [];
  laboratorios: Laboratorio[] = [];
  newListLabs: Laboratorio[] = [];
  segmento: Segmento;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
          this.api.getSegmento(params.id).subscribe(segmento => {
              this.segmento = <Segmento>segmento;
          });

          this.api.getEnsaioSegmento(params.id).subscribe(servicos => {
              this.servicos = servicos;
              this.getLaboratorios();
          });
      });
  }

  getLaboratorios() {
      this.api.getLaboratorios().subscribe(laboratorios => {
          this.laboratorios = laboratorios;
          this.gerarMatriz();
      });
  }

  gerarMatriz() {
      for (let i = 0; i < this.laboratorios.length; i++) {
          const newLab = new Laboratorio();
          newLab.id = this.laboratorios[i].id;
          newLab.nome = this.laboratorios[i].nome;
          newLab.sigla = this.laboratorios[i].sigla;
          newLab.descricao = this.laboratorios[i].descricao;
          newLab.ensaios = [];

          for (let j = 0; j < this.servicos.length; j++) {
              const ensaio = this.laboratorios[i].ensaios.find(x => x.id === this.servicos[j].id);
              newLab.ensaios.push(ensaio);
          }

          this.newListLabs.push(newLab);
      }
  }

  truncateText(texto: String) {
      const tamanho = 20;
      const nText = texto.length - tamanho < 0 ? texto.length : tamanho;

      let novoTexto = '';
      for (let i = 0; i < nText; i++) {
          novoTexto += texto[i];
      }
      return novoTexto + '...';
  }
}
