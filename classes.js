"use strict";
class Employee {
    constructor(id, name, address) {
        this.name = name,
            this.id = id,
            this.address = address;
    }
    getNamewithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, 'john', 'bangalore');
console.log(john);
let address = john.getNamewithAddress();
console.log(address);
