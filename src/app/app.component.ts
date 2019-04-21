import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { ServicehttpService } from './servicehttp.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Saved Story',
      url: '/savedstory',
      icon: 'paper'
    },
    {
      title: 'Rate Us',
      url: '/rateus',
      icon: 'thumbs-up'
    },
    /* {
      title: 'My Activity',
      url: '/myactivity',
      icon: 'document'
    }, */
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }


    /* {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    },
    {
      title: 'Register',
      url: '/register',
      icon: 'sign-up'
    } */

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm:FCM
  ) {
    this.initializeApp();
  }

  ngOnInit(){
    this.fcm.onNotification().subscribe(data =>{
      alert(data.body);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
