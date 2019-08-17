class Hamburger {
    constructor(type, calories, addSecret = false) {
        var bCheeseAdded = false;
        var bTomatoeAdded = false;
        var bSecretIngredientAdded = false;
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
        this.AddSecretIngredient = () => {
            if (bCheeseAdded || iTomatoAdded > 0) {
                console.log("Sorry, you can add secret ingredient only before other ingredients");
            } else if (bSecretIngredientAdded) {
                console.log("Sorry, you can add secret ingredient only once.");
            } else {
                bSecretIngredientAdded = true;
                calories = calories + 100;
            }
        }
        if (addSecret) {
            this.AddSecretIngredient();
        }
    }
}

const myHumburger = new Hamburger('classic', 600, true);
myHumburger.AddSecretIngredient(); /// ---> 'Sorry, you can add secret ingredient only once.'

console.log(myHumburger.getCalories()); // --> 700