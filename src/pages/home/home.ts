import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api'
import { Storage } from '@ionic/storage'
import { AddPage } from '../add/add'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	coaches : any;

  constructor(public navCtrl: NavController, public apiProv : ApiProvider,
  	public storage: Storage) {

  }

  ionViewDidLoad() {
  	this.storage.get('token').then((val)=>{
  		console.log(val)
  		this.apiProv.getAllCoach(val).subscribe(data => {
  			console.log(data);
  			this.coaches = data;
    },
    err => {
      console.log('Something went wrong!');
    });

  });
}
addPressed(){
  this.navCtrl.push(AddPage)
}
}