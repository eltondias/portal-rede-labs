import { UtilService } from 'src/app/services/util.service';
import { AreaDeAtuacao } from './../../model/area-de-atuacao.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas-atuacao',
  templateUrl: './areas-atuacao.component.html',
  styleUrls: ['./areas-atuacao.component.css']
})
export class AreasAtuacaoComponent implements OnInit {

  areasAtuacao: AreaDeAtuacao[] = [];
  constructor(private api: ApiService, private utilService: UtilService) {}

  ngOnInit() {
      // this.utilService.preload.emit({ativar: true, texto: 'carregando...'});
      this.api.getAreasDeAtuacao().subscribe(areasAtuacao => {
          this.areasAtuacao = areasAtuacao;
          console.log(this.areasAtuacao )
      });
  }

  truncateText(texto: String) {
      const tamanho = 50;
      const nText = texto.length - tamanho < 0 ? texto.length : tamanho;

      let novoTexto = '';
      for (let i = 0; i < nText; i++) {
          novoTexto += texto[i];
      }
      return novoTexto + '...';
  }

}
