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
  const date = new Date();
  const timeNow = date.getHours();
  const dayNow = date.getDay();
  if ((timeNow >= 23) || (timeNow >= 0 && timeNow <= 6)) {
    cart.nightDiscount = 5;
  }
  if (dayNow === 6 || dayNow === 0) {
    cart.weekendDiscount = 5;
  }
}

function setBonus(cart) {
  let bonus = 0;
  bonus = 5 * Math.floor(cart.orderTotalPrice / 100);
  cart.bonus = bonus;
}

User.prototype.makeOrder = function makeOrder() {
  this.orderTotalPrice = (this.orderTotalPrice - this.bonus)
      * (1 - (this.nightDiscount + this.weekendDiscount) / 100);
};


User.prototype.addItem = function addItem(sum) {
  this.orderTotalPrice += sum;
};


const cart = new User();
cart.addItem(100);
cart.addItem(200);

cart.makeOrder(); // ‘Price after discount and including bonuses is 300’


setBonus(cart);
getDiscount(cart);

cart.makeOrder();
// ‘Price after discount and including bonuses is 250.45’ (300 - bonuses - discount)
