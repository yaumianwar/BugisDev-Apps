import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the Page4Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/page-4/page-4.html',
})
export class Page4Page {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.getSelling();
  }

  getSelling(){
    this.sellings=[
    {Costumer:"Yaumi", InvoiceNumber:"NY12", Quantity:"4", Amount:"34000"},
    {Costumer:"Indah", InvoiceNumber:"NY43", Quantity:"7", Amount:"34000"},
    {Costumer:"Indi", InvoiceNumber:"NY16", Quantity:"2", Amount:"34000"}
    ]
  }
}
