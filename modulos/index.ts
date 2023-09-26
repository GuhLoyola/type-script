import { Customer } from "./customer";

interface SpecialCustomer extends Customer {
    couponQuantity: number
}

const specialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name: 'Gustavo',
    age: 20
}