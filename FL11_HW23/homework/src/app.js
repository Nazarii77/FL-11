// The Decorator pattern isn't heavily tied to how objects are created
// but instead focuses on the problem of extending their functionality.

/*function MacBook() {
    this.price = 800;
    this.memory = 8;
    this.ssd = false;
    this.size = 11.6;

    this.const = () => console.log(this.price + "$");
}

function addMemory(macbook) {
    macbook.price = macbook.price + 100;
    macbook.memory = 16;
}

function addSSD(macbook) {
    macbook.price = macbook.price + 100;
    macbook.ssd = true;
}

const myMacBook = new MacBook();
myMacBook.const();
addMemory(myMacBook);
myMacBook.const();
addSSD(myMacBook);
myMacBook.const();*/


/*
cart = new Cart();
cart.addItem(100);
cart.addItem(200);
cart.makeOrder(); // ‘Price after discount and including bonuses is 300’

setBonus(cart);
getDiscount(cart);

cart.makeOrder(); // ‘Price after discount and including bonuses is 250.45’ (300 - bonuses - discount)*/



class User {

    constructor(name) {
        this.name = name;
        this.orderTotalPrice = 0;
        this.weekendDiscount = 0;
        this.nightDiscount = 0;
        this.bonus = 0;
    }
}

function getDiscount(cart) {
    var date = new Date();
    var time_now = date.getHours();
    var day_now=date.getDay();
    if( (time_now>=23) || (time_now>=0 && time_now<=6)){
         cart.nightDiscount = 5;
    }
    if (day_now ==6||day_now==0) {
         cart.weekendDiscount = 5;
    }
}
function setBonus(cart) {
    var bonus = 0;
    bonus  = 5 * Math.floor(cart.orderTotalPrice/100);
    cart.bonus =  bonus;
}

function  makeOrder(cart) {
    return (cart.orderTotalPrice - cart.bonus) * (1 - (cart.nightDiscount+ cart.weekendDiscount)/100);
}
