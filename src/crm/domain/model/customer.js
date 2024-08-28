import {v4 as uuidv4} from 'uuid';

export class Customer{
    constructor(name) {
        this._id = uuidv4();
        this._name = name;
        this._lastOrderTotalPrice = 0;
    }

    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get lastOrderTotalPrice() {
        return this._lastOrderTotalPrice;
    }

    set lastOrderTotalPrice(newLastOrderTotalPrice){
        this._lastOrderTotalPrice=newLastOrderTotalPrice;
    }

}