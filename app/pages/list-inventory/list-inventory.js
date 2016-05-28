import {Page, NavController, ViewController} from 'ionic-angular';
import {DetailInventoryPage} from '../detail-inventory/detail-inventory';
import {AddInventoryPage} from '../add-inventory/add-inventory';
/*
  Generated class for the ListInventoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/list-inventory/list-inventory.html',
})
export class ListInventoryPage {
  static get parameters() {
    return [[NavController], [ViewController]];
  }

  constructor(nav, view) {
    this.nav = nav;
    this.view = view;
    this.getInventory;
  }

  goToAddInventory(){
    this.nav.push(AddInventoryPage);
  }

  goToDetailInventory(){
    this.nav.push(DetailInventoryPage);
  }

  getInventory(){
    this.inventories=[
    {name:"test", code:"NY12", quantity:"4", price:"2000"},
    {name:"test", code:"NY43", quantity:"7", price:"1000"},
    {name:"test", code:"NY16", quantity:"2", price:"2300"}
    ]
  }

  getInventory(){
    this.inventories=[
    {name:"test", code:"NY12", quantity:"4", price:"2000"},
    {name:"test", code:"NY43", quantity:"7", price:"1000"},
    {name:"test", code:"NY16", quantity:"2", price:"2300"}
    ]
  }
}
