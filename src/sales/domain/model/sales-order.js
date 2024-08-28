import {v4 as uuidv4} from 'uuid';
import {SalesOrderItem} from "./sales-order-item.js";

export class SalesOrder{
    constructor(customerId) {
        this._id=uuidv4();
        this._customerId=customerId;
        this._items= [];

    }
    addItem({productId, quantity, unitPrice}){
        this._items.push(new SalesOrderItem({ orderId:this._id, productId, quantity, unitPrice}));
    }

    calculateTotalPrice(){
        return this._items.reduce((total, item) => total + item.calculateItemPrice(),0);
    }

    get customerId(){
        return this._customerId;
    }

    get id(){
        return this._id;
    }

    get totalPrice(){
        return this.calculateTotalPrice();
    }
}


