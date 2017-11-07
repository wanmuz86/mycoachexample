import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api'
import {HomePage} from '../../pages/home/home'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

account = {
	email:'',
	password:''
}
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public apiClient : ApiProvider , 
    public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin(){
     this.apiClient.login(this.account).subscribe(data => {
       this.storage.set('token', data.token);
       this.navCtrl.setRoot(HomePage);
  },

    err => {
      console.log('Something went wrong!');
    });
  }

}
