class Hamburger {
    constructor(type, calories) {
        var bCheeseAdded = false;
        this.type = type;
        this.getCalories = () => calories;
        this.setCalories = (value) => calories = value;
        this.addCheese = () => {
            if (!bCheeseAdded) {
                calories = calories + 120;
                bCheeseAdded = true;
            } else {
                console.log("Sorry, you can add Cheese only once");
            }
        };
    }
}

const myHumburger = new Hamburger('classic', 600);
console.log(myHumburger.getCalories()); // --> 600

myHumburger.addCheese();
console.log(myHumburger.getCalories()); // --> 720
myHumburger.addCheese(); // --> 'Sorry, you can add Cheese only once'
console.log(myHumburger.getCalories()); // --> 720