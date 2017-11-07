import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage'
import { HttpHeaders,  } from '@angular/common/http';


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello ApiProvider Provider');
  }

login(user){
	const body = {
		'email':user.email,
		'password': user.password
	}
	return this.http.post('https://haunted-crypt-78964.herokuapp.com/login', body)
	.map(res=>res.json())

}
getAllCoach(token){
	
	var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    var options = new RequestOptions({headers: headers});
    console.log(headers)
  return this.http.get('https://haunted-crypt-78964.herokuapp.com/loggedInCoach', 
  options)
	.map(res=>res.json())
  
};	
addCoach(data){
  	const body = {
		'name':data.name,
    'description': data.description,
    'picURL' :data.picURL,
	}
 return this.http.post('https://haunted-crypt-78964.herokuapp.com/coaches', body )
	.map(res=>res.json())
}
}
