import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmationRamassagePage } from '../confirmation-ramassage/confirmation-ramassage';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the RamassagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ramassage',
  templateUrl: 'ramassage.html'
})
export class RamassagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	//this.presentToast();
  }

  onGoToConfirmationRamasage(){
  	this.navCtrl.push(ConfirmationRamassagePage);
  }

  openMenu() {
   this.menuCtrl.open();
 }

 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }

  	/*presentToast() {
	  let toast = this.toastCtrl.create({
	    message: 'Selectionner un domicile',
	    duration: 15000,
    	cssClass: 'toast',
    	closeButtonText: "X",
    	showCloseButton: true,
	    position: 'bottom'
	  });*/

	  /*toast.onDidDismiss(() => {
	    console.log('Dismissed toast');
	  });

	  //toast.present();
	}*/

}
