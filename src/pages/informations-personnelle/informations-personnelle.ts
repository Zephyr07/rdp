import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditInfosPage } from '../edit-infos/edit-infos';

/**
 * Generated class for the InformationsPersonnellePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-informations-personnelle',
  templateUrl: 'informations-personnelle.html',
})
export class InformationsPersonnellePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToEditInfos(){
  	this.navCtrl.push(EditInfosPage);
  }

}
