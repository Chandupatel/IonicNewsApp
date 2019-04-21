import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.page.html',
  styleUrls: ['./rateus.page.scss'],
})
export class RateusPage implements OnInit {

  constructor(private project: ServicehttpService) { }
a;
b;
c;
d;
e;
  selected(val){
    if(val==1){
      this.a="blue";
      this.b="black";
      this.c="black";
      this.d="black";
      this.e="black";
    }
    if(val==2){
      this.a="blue";
      this.b="blue";
      this.c="black";
      this.d="black";
      this.e="black";
    }
    if(val==3){
      this.a="blue";
      this.b="blue";
      this.c="blue";
      this.d="black";
      this.e="black";
    }
    if(val==4){
      this.a="blue";
      this.b="blue";
      this.c="blue";
      this.d="blue";
      this.e="black";
    }
    if(val==5){
      this.a="blue";
      this.b="blue";
      this.c="blue";
      this.d="blue";
      this.e="blue";
    }
    console.log(val);
    this.project.addRating(val);
  }

  ngOnInit() {
  }
  

}
