import { Segmento } from './../../model/segmento.model';
import { ApiService } from './../../services/api.service';
import { IAreaDeAtuacao, AreaDeAtuacao } from './../../model/area-de-atuacao.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-segmentos',
  templateUrl: './lista-segmentos.component.html',
  styleUrls: ['./lista-segmentos.component.css']
})
export class ListaSegmentosComponent implements OnInit {

  getToken = true;
  areaDeAtuacao: IAreaDeAtuacao;
  areaAtuacao: AreaDeAtuacao;
  segmentos: Segmento[] = [];

  constructor( private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
          this.api.getAreaDeAtuacao(params.id).subscribe(areaAtuacao => {
              localStorage.setItem('idAreaAtuacao', params.id);
              this.areaAtuacao = <AreaDeAtuacao>areaAtuacao;
          });

          this.api.getSegmentosAreaAtuacao(params.id).subscribe(segmentos => {
              localStorage.setItem('idAreaAtuacao', params.id);
              this.segmentos = segmentos;
          });
      });
  }

  truncateText(texto: String) {
      const tamanho = 100;
      const nText = texto.length - tamanho < 0 ? texto.length : tamanho;

      let novoTexto = '';
      for (let i = 0; i < nText; i++) {
          novoTexto += texto[i];
      }
      return novoTexto + '...';
  }
}
