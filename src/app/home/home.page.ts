import { Component } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { NavController, PopoverController, ActionSheetController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { newsData } from './newsData';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pet;
  constructor(private httpser:ServicehttpService, private r:NavController, public popoverCtrl: PopoverController, public actionSheetController: ActionSheetController){
    this.pet="Top";
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      //header: 'Albums',
      buttons: [{
        text: 'My Activity',
        role: 'activity',
        icon: 'document',
        handler: () => {
          this.r.navigateRoot('/myactivity');
          //console.log('Activity clicked');
        }
      }, {
        text: 'Settings',
        icon: 'settings',
        handler: () => {
          console.log('Setting clicked');
        }
      }]
    });
    await actionSheet.present();
  }
// Popmanue(){
//   const popover = this.popoverCtrl.create(MyPopOverPage);
//   popover.present();
// }q

newsd: newsData[];
s: Subscription;
// msp:Subscription;
u;
// sp;

takenToken;
ngOnInit() {
  this.takenToken = this.httpser.getTkn();
  	if(!this.takenToken)
  	{
  		this.r.navigateRoot(['/login']);
    }
    else{
      this.u = this.httpser.data;
  console.log(this.u);
  this.s = this.u.subscribe(( data1)=>{
    this.data(data1);
  },
  (err) =>{
    console.log(err);
  },
  ()=> {
    console.log("completed");
  });

    }
}
Top(){
  this.u = this.httpser.data;
  console.log(this.u);
  this.s = this.u.subscribe(( data1)=>{
    this.data(data1);
  },
  (err) =>{
    console.log(err);
  },
  ()=> {
    console.log("completed");
  });
}
Sports(){
  this.u = this.httpser.HNews;
  console.log(this.u);
  this.s = this.u.subscribe(( data1)=>{
    this.data(data1);
  },
  (err) =>{
    console.log(err);
  },
  ()=> {
    console.log("completed");
  });
}
Bollywood(){
  this.u = this.httpser.BllNews;
  console.log(this.u);
  this.s = this.u.subscribe(( data1)=>{
    this.data(data1);
  },
  (err) =>{
    console.log(err);
  },
  ()=> {
    console.log("completed");
  });

}

moren(x){
  this.httpser.sho(x);
}
ak;
ah:Subscription;
save(x){
  console.log("hello",x);
  this.httpser.saved(x.name,x.desc,x.URL);
  this.ak = this.httpser.sav();
    this.ah = this.ak.subscribe((req)=>{
      this.httpser.setsav(req);      
      console.log("hii");
    });
  }
  arnews;
  n = new Date();
  y= this.n.getFullYear();
  m= this.n.getMonth()+1;
  d= this.n.getDate();
  datenew = new Date(this.n.getTime()-(3 * 24 *60* 60 * 1000));
  da=this.y+","+this.m+","+this.d;
  dateold;

  
  data(data1){
    this.arnews=data1;
    console.log(this.arnews);
    for(let i=0;i<this.arnews.length;i++){
      this.dateold=new Date(this.arnews[i].date);
      if(this.dateold<this.datenew){
        console.log(this.dateold+'no');
        this.arnews.splice(i,1);
        i=i-1;
      }
      else{
        console.log(this.dateold+'yes');
      }
    }
  }
  
}
