import {Component, OnInit} from '@angular/core';
import {IJoke} from '../../types/IJoke';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data: IJoke[];

  constructor() {
  }

  ngOnInit(): void {
    this.initData();
  }
  private initData(): void{
    this.data = [
      {title: 'Title1',
        description: 'Opis',
        imgUrl: 'https://cdn.vox-cdn.com/thumbor/FOIV1c1Eq9Y1HQq-Sn1RgReLp0E=/0x0:735x500/920x613/filters:focal(310x192:426x308):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66727168/image.0.png',
      },
      {title: 'Title2',
        description: 'Opis2',
        imgUrl: 'https://i.pinimg.com/236x/7c/26/1e/7c261ee1a7bd2c98af3e62bf171933ad.jpg',
      }
    ];
  }

}
