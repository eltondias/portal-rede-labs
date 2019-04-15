import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Email } from './../../model/email.model';
import { LinkRedeSocial } from './../../model/link-rede-social.model';
import { Contato } from './../../model/contato.model';
import { Acreditacao } from './../../model/acreditacao.model';
import { Instituicao } from './../../model/instituicao.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { Laboratorio, Status } from 'src/app/model/laboratorio.model';
import { Pesquisador } from 'src/app/model/pesquisador.model';
import { Endereco } from 'src/app/model/endereco.model';
import { Cidade } from 'src/app/model/cidade.model';
import { Membro } from 'src/app/model/membro.model';
import { Ensaio } from 'src/app/model/ensaio.model';
import { RedeSocial } from 'src/app/model/link-rede-social.model';
import { Telefone } from 'src/app/model/telefone.model';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { LinkRedeSocialService } from 'src/app/services/link-rede-social.service';
import { TelefoneService } from 'src/app/services/telefone.service';
import { EmailService } from 'src/app/services/email.service';
import { CaracterizacaoLaboratorio } from 'src/app/model/caracterizacao-laboratorio.model';
import { CaracterizacaoLaboratorioService } from 'src/app/services/caracterizacao-laboratorio.service';
 

@Component({
  selector: 'app-update-laboratorio',
  templateUrl: './update-laboratorio.component.html',
  styleUrls: ['./update-laboratorio.component.css']
})
export class UpdateLaboratorioComponent implements OnInit {

  @Input() laboratorio: Laboratorio;
  instituicoes: Instituicao[] = [];
  coordenadores: Pesquisador[] = [];
  cidades: Cidade[] = [];
  membros: Membro[] = [];
  ensaios: Ensaio[] = [];
  acreditacaes: Acreditacao[] = [];  
  redesSociais: LinkRedeSocial[] = [];
  telefones: Telefone[] = [];
  emails: Email[] = [];
  endereco: Endereco = new Endereco();
  novoEmail = new Email();
  novoTelefone = new Telefone();
  novaRede = new LinkRedeSocial();
  tiposRedes: string[] = [];
  caracteristicasLab =  new  CaracterizacaoLaboratorio(); 
  editar = true;

  constructor(  
      private api: ApiService, 
      private apiLab: LaboratorioService,
      private apiLinkRedeSocialService: LinkRedeSocialService,
      private apiTelefoneService: TelefoneService,
      private apiEmailService: EmailService,
      private apiCaracterizacao: CaracterizacaoLaboratorioService,
      private activatedRoute: ActivatedRoute, 
      public dialogRef: MatDialogRef<UpdateLaboratorioComponent>,      
      @Inject(MAT_DIALOG_DATA) public data
      ) { 
        for (const rede in RedeSocial) {
          this.tiposRedes.push(rede);
       }
      }


  ngOnInit() {
    // console.log(this.data.lab);
    
   
    this.getCidades();
    this.getInstituicoes();
    this.getCoordenadores();

    this.laboratorio = this.data.lab; 
    if(this.laboratorio.id) {
      this.getLaboratorio();
    } else {
      this.editar = false; 
    } 
    
    // else {
    //   this.activatedRoute.params.subscribe( params => {
    //     this.api.getLaboratorio(params['id']).subscribe((lab: any) => {
    //      this.laboratorio = lab;
 
    //     });
    //   }
    //   );
    // }

  }

  getLaboratorio() {
    this.getEndereco();
    this.getAcreditacaosLaboratorio();
    this.getLinkRedeSocialsLaboratorio();
    this.getEmailsLaboratorio();
    this.getTelefonesLaboratorio();
    this.getMembrosLaboratorio();
    this.getCaracterizacaoLaboratoriosLaboratorio();
    this.editar = true;
  }

  getInstituicoes() {
    this.api.getInstituicoes().subscribe((instituicoes) => {
      this.instituicoes =  instituicoes;
    });
  }
 
  getCoordenadores() {
    this.api.getCoordenadores().subscribe((coordenadores) => {
      this.coordenadores =  coordenadores;
      // console.log(this.coordenadores);
    });
  }

  getEndereco() {
    this.api.getEndereco(this.laboratorio.enderecoId).subscribe((endereco: any) => {
      this.endereco =  endereco;
      //console.log(this.endereco);
    });
  }

  getCidades(){
    this.api.getCidades().subscribe((cidades) => {
      this.cidades =  cidades;
      //console.log(this.cidades);
    });
  }

  getMembrosLaboratorio() {
    this.api.getMembrosLaboratorio(this.laboratorio.id).subscribe((membros) => {
      this.membros =  membros;
      console.log(this.membros);
    });
  }

  getTelefonesLaboratorio() {
    this.api.getTelefonesLaboratorio(this.laboratorio.id).subscribe((telefones) => {
      this.telefones =  telefones;
      // console.log(this.telefones);
    });
  }

  getEmailsLaboratorio()  {
    this.api.getEmailsLaboratorio(this.laboratorio.id).subscribe((emails) => {
      this.emails =  emails;
      // console.log(this.emails);
    });
  }

  getLinkRedeSocialsLaboratorio() {
    this.api.getLinkRedeSocialsLaboratorio(this.laboratorio.id).subscribe((redesSociais) => {
      this.redesSociais =  redesSociais;
      // console.log(this.redesSociais);
    });
  }

  getAcreditacaosLaboratorio()  {
    this.api.getLinkRedeSocialsLaboratorio(this.laboratorio.id).subscribe((acreditacaes) => {
      this.acreditacaes =  acreditacaes;
      // console.log(this.acreditacaes);
    });
}

getCaracterizacaoLaboratoriosLaboratorio() {
  this.api.getCaracterizacaoLaboratoriosLaboratorio(this.laboratorio.id).subscribe((caracteristicas: any) => {
    this.caracteristicasLab =  caracteristicas;
    // console.log(  this.caracteristicasLab);
  });
}

 



addEmail() {
  this.novoEmail.instituicaoId = this.laboratorio.instituicaoId;
  this.novoEmail.laboratorioId = this.laboratorio.id;  
  this.apiEmailService.create(this.novoEmail).subscribe((email: any) => {
    this.emails.push(email.body);
  });
  this.novoEmail = new Email();
}

addRedeSocial() {
  this.novaRede.instituicaoId = this.laboratorio.instituicaoId;
  this.novaRede.laboratorioId = this.laboratorio.id;
  this.apiLinkRedeSocialService.create(this.novaRede).subscribe((rede: any) => {
    this.redesSociais.push(rede.body);
  });
  this.novaRede  = new LinkRedeSocial();
}

addTelefone() {
  this.novoTelefone.instituicaoId = this.laboratorio.instituicaoId;
  this.novoTelefone.laboratorioId = this.laboratorio.id;
  this.apiTelefoneService.create(this.novoTelefone).subscribe((tel: any) => {
    this.telefones.push(tel.body);
  });
  this.novoTelefone = new Telefone();
}

removeEmail(indice) {
  const email = this.emails[indice];
  this.apiEmailService.delete(email.id).subscribe((email) => {
    this.emails.splice(indice, 1);
  });
}

removeRedeSocial(indice) {
  const rede = this.redesSociais[indice];
  this.apiLinkRedeSocialService.delete(rede.id).subscribe((rede) => {
    this.redesSociais.splice(indice, 1);
  });
}

removeTelefone(indice) {
  const tel = this.telefones[indice];
  this.apiTelefoneService.delete(tel.id).subscribe((tel) => {
    this.telefones.splice(indice, 1);
  });
}



atualizarLaboratorio() {

  this.laboratorio.endereco = this.endereco;
  this.laboratorio.caracterizacaoLaboratorio = this.caracteristicasLab;

  this.apiLab.atualizarLaboratorio(this.laboratorio).subscribe((lab) => {
    console.log(lab);
    this.dialogRef.close(lab);
  });

}

  cadastrarLaboratorio() {
    this.laboratorio.endereco = this.endereco;
    this.laboratorio.status = Status.ATIVO;

    this.apiCaracterizacao.create(this.caracteristicasLab).subscribe((caracteristicasLab: any) => {
      this.laboratorio.caracterizacaoLaboratorioId = caracteristicasLab.id;
      this.apiLab.salvarLaboratorio(this.laboratorio).subscribe((lab) => {
        this.laboratorio = lab;
        if (this.laboratorio.enderecoId) {
          this.getLaboratorio();       
       }      
      });
    });
  }
}
