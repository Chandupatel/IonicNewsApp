import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { User } from './User';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private r: Router, private httpser: ServicehttpService, private http:HttpClient ,private navcrt:NavController) { }

  x:User;
  a:Subscription;
  b;

  submit(a:string, b:string, c:string)
  {
    this.x = new User(a,b,c);
    this.b = this.httpser.crUser(this.x);
    this.a = this.b.subscribe( (data) => {
    console.log(data); 
    },
    (err) => {
    //console.log(err);
    alert("Fill all the data...");
    },
    () => {
      //console.log("Completed");
      alert("You are successfully Register!!");
    });
    this.navcrt.navigateRoot('/login');
  	//this.r.navigate(['/login']);
  }

  ngOnInit() {
  }

}
