import {Page, NavController, ViewController} from 'ionic-angular';
import {AddOrderPage} from '../add-order/add-order';
import {DetailOrderpage} from '../detail-order/detail-order';
import {OrderAPI} from '../services/OrderAPI';


@Page({
  templateUrl: 'build/pages/page2/page2.html',
  providers: [OrderAPI]
})
export class Page2 {
    static get parameters() {
    return [[NavController], [ViewController], [OrderAPI]];
  }
  constructor(nav, view, api) {
    this.nav = nav;
    this.view = view;
    this.api = api;
    this.getOrders();

  }

  getOrders() {

        this.api.getOrders()
        .subscribe(data => {
            this.orders = data.data;
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
    }

  goToAddOrder(){
    this.nav.push(AddOrderPage);
  }

  goToDetail(){
    this.nav.push(DetailOrderpage);
  }

  /* getOrder(){
    this.orders=[
    {CostumerName:"Yaumi", Code:"NY12", Quantity:"4", IsSaled:"paid"},
    {CostumerName:"Indah", Code:"NY43", Quantity:"7", IsSaled:"not paid"},
    {CostumerName:"Indi", Code:"NY16", Quantity:"2", IsSaled:"paid"}
    ]
  } */
}
