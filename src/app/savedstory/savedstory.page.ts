import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';
import { newsData } from '../home/newsData';
import { Subscription } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-savedstory',
  templateUrl: './savedstory.page.html',
  styleUrls: ['./savedstory.page.scss'],
})
export class SavedstoryPage implements OnInit {

  constructor(private project: ServicehttpService,public actionSheetController: ActionSheetController) { }
  async presentActionSheet(x,y) {
    const actionSheet = await this.actionSheetController.create({
      //header: 'Albums',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Remove from saved story',
        icon: 'trash',
        handler: () => {
          this.del(x,y);
        }
      }]
    });
    await actionSheet.present();
  }

  ak:newsData[];
  ah:Subscription;
  su;
  data;

  flag;
  del(i,j){
    this.flag=!this.flag;
    this.ak.splice(j,1);
    this.project.Delsav(i);
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
