import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AjoutDomicilePage } from '../ajout-domicile/ajout-domicile';

/**
 * Generated class for the DomicilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-domiciles',
  templateUrl: 'domiciles.html',
})
export class DomicilesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController) {
  }

  	openModal(){
  		var modalPage = this.modalCtrl.create('ModalPage'); 
  		modalPage.present();
	}	 

  onGoToEditDomicile(){
  	this.navCtrl.push(AjoutDomicilePage);
  }
}
