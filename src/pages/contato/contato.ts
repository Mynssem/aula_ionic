import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {
  
  quantidade: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.quantidade = this.navParams.get('qnt');
    console.log(this.quantidade);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoPage');
  }

}
