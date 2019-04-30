import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReabonnementPage } from '../reabonnement/reabonnement';

/**
 * Generated class for the AbonnementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-abonnements',
  templateUrl: 'abonnements.html',
})
export class AbonnementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToReabonnement(){
  	this.navCtrl.push(ReabonnementPage);
  }

}
