import {Page, NavController, ViewController} from 'ionic-angular';
import {AddInventoryTypePage} from '../add-inventory-type/add-inventory-type';
import {ListInventoryPage} from '../list-inventory/list-inventory';

@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  static get parameters() {
    return [[NavController], [ViewController]];
  }
  constructor(nav, view) {
    this.nav = nav;
    this.view = view;
    this.getInventoryType();

  }

  goToAddInventoryType(){
    this.nav.push(AddInventoryTypePage);
  }

  goToListInventory(){
    this.nav.push(ListInventoryPage);
  }

  getInventoryType(){
    this.inventories_type=[
    {name:"Clothes", code:"NY11", available:"4", soldout:"56"},
    {name:"Pants", code:"NY12", available:"7", soldout:"39"},
    {name:"Other", code:"NY13", available:"2", soldout:"70"}
    ]
  }
}
