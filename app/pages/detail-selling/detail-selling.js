import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the DetailSellingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/detail-selling/detail-selling.html',
})
export class DetailSellingPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
