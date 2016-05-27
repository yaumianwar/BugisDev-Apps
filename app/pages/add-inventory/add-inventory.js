import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the AddInventoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-inventory/add-inventory.html',
})
export class AddInventoryPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
