class Hamburger {
    constructor(type, calories) {
        var bCheeseAdded = false;
        var iTomatoeAdded = 0;
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
        this.addTomatoe = () => {
            if (iTomatoeAdded <= 1) {
                calories += 20;
                iTomatoeAdded += 1;
            } else {
                console.log("Sorry, you can add Tomatoe only twice");
            }
        };
    }
}

const myHumburger = new Hamburger('classic', 600);
console.log(myHumburger);


myHumburger.addTomatoe();
console.log(myHumburger.getCalories()); /// ---> 620
myHumburger.addTomatoe();
console.log(myHumburger.getCalories()); /// ---> 640
myHumburger.addTomatoe(); //'Sorry, you can add Tomatoe only twice'
console.log(myHumburger.getCalories());