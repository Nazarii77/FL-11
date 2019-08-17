class Hamburger {
    constructor(type, calories) {
        var bCheeseAdded = false;
        var bTomatoeAdded = false;
        var bIngredientAdded = false;
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


console.log(myHumburger.getCalories());
myHumburger.AddSecretIngredient();
myHumburger.AddSecretIngredient(); // --> 'Sorry, you can add secret ingredient only once.'
console.log(myHumburger.getCalories());

myHumburger.addTomato();
myHumburger.AddSecretIngredient(); // --> 'Sorry, you can add secret ingredient only before other ingredients'