import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicehttpService } from '../servicehttp.service';
import { UserLog } from './UserLog';
import { Subscription, from } from 'rxjs';
import {FCM} from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navcrt:NavController, private r:Router, private httpser:ServicehttpService, private fcm:FCM ) {
     this.fcm.getToken().then(token=>{
      this.data(token);
    }); 
   }

  ul:UserLog;
  c;
  d:Subscription;
  tempToken;
  data(token){
    this.tempToken = token
  } 

  Login(x:string, y:string)
  {
    //this.ul = new UserLog(x,y,this.tempToken);
    this.c = this.httpser.chUser(x,y,this.tempToken);
    
    this.d = this.c.subscribe( (data) => {
      this.tempToken = data.headers.get('x-token');
      this.httpser.setTkn(this.tempToken);
      this.r.navigate(['/home']);
    },
    (err) => {
      //console.log(err);
      alert("Please enter valid Email and Password");
    },
    () => {
      //console.log("User Data Checks Out");
      alert("You are successfully Login!!!");
    });
    
  }

  Opsignpage2(){
    this.navcrt.navigateRoot('/register');
  }

  ngOnInit() {
  }

}
