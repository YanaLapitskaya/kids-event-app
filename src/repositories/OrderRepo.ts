import { Order } from "../models/Order";
import { Client } from "../models/Client";
import { Service } from "../models/Service";

export default class OrderRepo {
    static getAllOrders() {
        return Order.findAll({
            include: [{model: Client},
                {model: Service}]
        });
    }

    static getOrderById(id: any) {
        return Order.findById(id, {
            include: [{model: Client},
                {model: Service}]
        });
    }

    static createOrder(props: any) {
        return Promise.all([
            Order.create(props),
            Service.findAll( { where: {id: props.services}})
        ]).then(([count, order, services]) => {
            order.setServices(services).then(() => {
                this.updatePrice(order);
            });
        });
    }

    static updateOrder(id: any, props: any) {
        return Promise.all([
            Order.update(props, {where: {id}}),
            Order.findById( id ),
            Service.findAll( { where: {id: props.services}})
        ]).then(([count, order, services]) => {
            order.setServices(services)
                .then(() => {
                    this.updatePrice(order);
                });
        });
    }

    static deleteOrder(id: Number) {
        return Order.destroy({where: {id}});
    }

    static updatePrice(order: any) {
        return order.getServices()
            .then((services) => {
                const price = services.reduce((sum, service) => {
                    return sum + Number(service.price);
                }, 0);
                order.update({
                    price: price
                });
            });
    }
}