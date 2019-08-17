class Hamburger {
    constructor(type, calories) {
        var bCheeseAdded = false;
        var iTomatoAdded = 0;
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
        this.addTomato = () => {
            if (iTomatoAdded <= 1) {
                calories += 20;
                iTomatoAdded += 1;
            } else {
                console.log("Sorry, you can add Tomatoe only twice");
            }
        };
    }
}

const myHumburger = new Hamburger('classic', 600);
console.log(myHumburger);


myHumburger.addTomato();
console.log(myHumburger.getCalories()); /// ---> 620
myHumburger.addTomato();
console.log(myHumburger.getCalories()); /// ---> 640
myHumburger.addTomato(); //'Sorry, you can add Tomatoe only twice'
console.log(myHumburger.getCalories()); /// ---> 640