import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformationsPersonnellePage } from '../informations-personnelle/informations-personnelle';
import { AbonnementsPage } from '../abonnements/abonnements';
import { DomicilesPage } from '../domiciles/domiciles';

/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  onGoToInfosPerso(){
    this.navCtrl.push(InformationsPersonnellePage);
  }
  
  onGoToAbonnements(){
    this.navCtrl.push(AbonnementsPage);
  }
  
  onGoToDomiciles(){
    this.navCtrl.push(DomicilesPage);
  }

}
