import{Customer} from "./crm/domain/model/customer.js";
import{SalesOrder} from "./sales/domain/model/sales-order.js";


console.log("Elpepe");

const customer=new Customer("John Doe");
const order = new SalesOrder(customer.id);
order.addItem({productId:1, quantity:20, unitPrice:10});
order.addItem({productId:2, quantity:10, unitPrice:20});
customer.lastOrderTotalPrice = order.calculateTotalPrice();
console.log(`The customer ${customer.name}, identified by ID ${customer.id} has a total price of ${customer.lastOrderTotalPrice}`);
