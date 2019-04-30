import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChoixDomicilePage } from '../choix-domicile/choix-domicile';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToDomicile(){
    this.navCtrl.push(ChoixDomicilePage);
  }

}
