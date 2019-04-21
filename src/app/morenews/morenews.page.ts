import { Component, OnInit } from '@angular/core';
import { ServicehttpService } from '../servicehttp.service';

@Component({
  selector: 'app-morenews',
  templateUrl: './morenews.page.html',
  styleUrls: ['./morenews.page.scss'],
})
export class MorenewsPage implements OnInit {

  Alldata;
  title;
  desc;
  url;

  constructor(private project: ServicehttpService) {
    this.Alldata = project.returnsho();
    //console.log(this.Alldata);
    this.title = this.Alldata.name;
    this.desc = this.Alldata.desc;
    this.url = this.Alldata.URL;
   }

  ngOnInit() {
  }

}
