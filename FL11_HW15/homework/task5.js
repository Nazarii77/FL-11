class Hamburger {
    constructor(type, calories) {
        var bCheeseAdded = false;
        var bTomatoeAdded = false;
        var bIngredientAdded = false;
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
        this.AddSecretIngredient = () => {
            if (bCheeseAdded || iTomatoeAdded > 0) {
                console.log("Sorry, you can add secret ingredient only before other ingredients");
            } else if (bIngredientAdded) {
                console.log("Sorry, you can add secret ingredient only once.");
            } else {
                bIngredientAdded = true;
                calories = calories + 100;
            }

        }
    }
}

const myHumburger = new Hamburger('classic', 600);
console.log(myHumburger);

console.log(myHumburger.getCalories());
myHumburger.AddSecretIngredient();
myHumburger.AddSecretIngredient();
console.log(myHumburger.getCalories());