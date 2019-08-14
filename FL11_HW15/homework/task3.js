class Hamburger {
    constructor(type, calories) {
        var bCheeseAdded = false;
        this.type = type;
        let _calories = this.calories;
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
console.log(myHumburger.getCalories());

myHumburger.addCheese();
console.log(myHumburger.getCalories());
myHumburger.addCheese();
console.log(myHumburger.getCalories());