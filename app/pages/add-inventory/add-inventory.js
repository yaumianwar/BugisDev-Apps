import {Page, NavController} from 'ionic-angular';
import {InventoryDetailAPI} from '../services/InventoryDetailAPI';

/*
  Generated class for the AddInventoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-inventory/add-inventory.html',
  providers:[InventoryDetailAPI]
})
export class AddInventoryPage {
  static get parameters() {
    return [[NavController], [InventoryDetailAPI]];
  }

  constructor(nav, api) {
    this.nav = nav;
    this.api = api;
    this.inventoryDetail = {};
  }

  addInventoryDetail(){
    this.api.addOrder(this.inventoryDetail)
    .subscribe(data => {
      this.inventoryDetails = data.data;
    }, error => {
      console.log(JSON.stringify(error.json()))
    })
  }
}
