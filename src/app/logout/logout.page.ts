import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private r:NavController, private httpser: ServicehttpService) { }
  
  la;
  lb:Subscription;
  Logout(){
    this.la = this.httpser.lout();
    this.lb = this.la.subscribe( (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    },
    () => {
      this.r.navigateRoot(['/login']);
    });
  }
  ngOnDestroy()
  {
  	if(this.lb !== undefined)
    {
      this.lb.unsubscribe();
    }
  }

  ngOnInit() {
  }

}
