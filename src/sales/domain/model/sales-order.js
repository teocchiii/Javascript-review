import {v4 as uuidv4} from 'uuid';

export class SalesOrder{
    constructor(customerId) {
        this._id=uuidv4();
        this._customerId=customerId;
        this._items= [];

    }
    addItem({productId, quantity, unitPrice}){
        this._items.push({ orderId:this._id, productId, quantity, unitPrice})
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


