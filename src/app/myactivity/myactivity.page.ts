import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { newsData } from '../home/newsData';
import { Subscription } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-myactivity',
  templateUrl: './myactivity.page.html',
  styleUrls: ['./myactivity.page.scss'],
})
export class MyactivityPage implements OnInit {

  

  constructor(private project: ServicehttpService,public actionSheetController: ActionSheetController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      //header: 'Albums',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Data share');
        }
      }, {
        text: 'Save',
        icon: 'download',
        handler: () => {
          console.log('Data Save');
        }
      }]
    });
    await actionSheet.present();
  }

  ak:newsData[];
  ah:Subscription;
  su;

  flag;
  re(){
    this.flag=!this.flag;
    this.project.re();
    this.ak=[];
    this.flag=!this.flag;
  }
  ngOnInit() {
    this.su = this.project.sav();
    console.log(this.su);
    this.ah = this.su.subscribe((data1)=>{
        this.ak = data1;
    },(req)=>{
      this.project.setsav(req);
      console.log("hii");
    });
  }

}
