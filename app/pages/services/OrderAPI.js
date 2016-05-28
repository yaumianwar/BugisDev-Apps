import { Inject } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

export class OrderAPI {

    static get parameters(){

        return[ [Http] ];
    }

    constructor(http) {

        this.apiUrl = "http://mypocket.bugisdev.com/api";
        this.http = http;
    }

    getOrders() {

        return this.http.get(this.apiUrl + "/order")
            .map(res => res.json());
    }

    getOrder(ID) {

        return this.http.get(this.apiUrl + "/order/" + ID)
            .map(res => res.json());
    }

    addOrder(data) {

        data = JSON.stringify({
            Quantity: data.Quantity,
            InventoryDetailID: data.InventoryDetailID,
            CostumerName: data.CostumerName,
            IsSaled: data.IsSaled
        })

        return this.http.post(this.apiUrl + "/order", data)
            .map(res => res.json());
    }

}
