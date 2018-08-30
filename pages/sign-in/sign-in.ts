import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardIO } from '@ionic-native/card-io';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardIO: CardIO) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  scannearCartao() {
    this.cardIO.canScan()
      .then(
        (res: boolean) => {
          if (res) {
            let options = {
              requireExpiry: true,
              requireCVV: false,
              requirePostalCode: false
            };
            this.cardIO.scan(options);
            
          }
        }
      );
  }


}
