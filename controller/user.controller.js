var stock = {
    constructor(name,type, quantity ){
        this.name = name;
        this.type = type;
        this.quantity = quantity;
    },
    add({newName, newType, newQuantity}){
        this.name = newName,
        this.type = newType,
        this.quantity = newQuantity
        
        
        return{
        name: this.name,
        type: this.type,
        quantity:this.quantity
        }
    },
};


const stock1 = new stock('riham' , 'biscuity', '39');