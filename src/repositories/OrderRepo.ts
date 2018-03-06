import { Order } from "../models/Order";

class OrderRepo {

    constructor() {    }

    getAllOrders() {
        return Order.findAll();
    }
}

export default new OrderRepo();