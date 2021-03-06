import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContatoPage} from '../contato/contato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contatos: string[];
  items: string[];
  constructor(public navCtrl: NavController) {
    this.initializeItems();

  }

  navega()
  {
    this.navCtrl.push('ContatoPage', {qnt: 'André usa pantene'});
  }
  
  initializeItems() {
    this.items = [
      'Maricá',
      'Niterói',
      'São Gonçalo',
      'Saquarema',
      'Itaborai'
      
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
