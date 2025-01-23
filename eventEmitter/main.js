const {EventEmitter} = require("node:events");
 
class Purchase extends EventEmitter {
    constructor() {
        super(); 
    }

    purchaseProduct(product, amount) {
        this.on("purchase:initialized", (product, amount) => {
            console.log("purchase has been initialized with \nProduct: "+product + " and Amount: " + amount);
        })
        
        this.emit("purchase:initialized",product, amount);
    }
}

const pur = new Purchase();
pur.purchaseProduct("Shirt", 1500 );

