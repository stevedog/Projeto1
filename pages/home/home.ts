import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AsyncValidator } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string = ""
  token: any = ""
  range = ""
  pagar: boolean = false
  receber: boolean = false
  tokenCriado = false
  valor_receber: number
  tokenAtivado: boolean = false
  tokenPagador: any
  senhaPagador: any
  spinner: boolean = false
  fechaPagamento: boolean = false

  constructor(public navCtrl: NavController, private params: NavParams) {
    this.user = this.params.data.user
  }


  voltar() {
    this.pagar = false; 
    this.receber = false;
    this.tokenAtivado = false
    this.fechaPagamento = false
    this.tokenCriado = false
  }

  ativarPagamento() {
    this.pagar = true
    this.receber = false
    
  }

  ativarToken(){
    this.tokenCriado = true
  }

  ativarRecebimento() {
    this.pagar = false
    this.receber = true
  }

  confirmarValor() {
    this.tokenAtivado = true
  }

  // makeid() {
  //   var text = "";
  //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  //   for (var i = 0; i < 6; i++)
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));

  //   this.token = text;
  // }

  simularCompra() {
    this.receber = false
    this.pagar = false
    this.fechaPagamento = true
    this.tokenAtivado = false
    this.tokenCriado = false
    
    this.spinner = true
    let TIME_IN_MS = 3000;
    let hideFooterTimeout = setTimeout(() => {
      this.spinner = false
      
    }, TIME_IN_MS);
  }

}
