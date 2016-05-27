import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the AddSellingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-selling/add-selling.html',
})
export class AddSellingPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
