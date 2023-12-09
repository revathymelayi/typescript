class Employee{
    id:number;
    name:string;
    address:string;

    constructor(id:number,name:string,address:string){
      
        this.name=name,
          this.id=id,
        this.address=address
    }

    getNamewithAddress():string{
        return `${this.name} stays at ${this.address}`

    }

}

let john= new Employee(1,'john','bangalore')

console.log(john)

let address = john.getNamewithAddress()
console.log(address)
