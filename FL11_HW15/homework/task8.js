class Hamburger {
    constructor(type, calories, addSecret = false) {
        var bCheeseAdded = false;
        var bIngredientAdded = false;
        var iTomatoeAdded = 0;
        var ibite = 0;

        this.type = type;
        let _calories = this.calories;
        this.getCalories = () => calories;
        this.setCalories = (value) => calories = value;
        this.addCheese = () => {
            if (!bCheeseAdded) {
                calories = calories + 120;
                bCheeseAdded = true;
            } else if (ibite > 0) {
                console.log("Sorry, you can not add cheese");
            } else {
                console.log("Sorry, you can add Cheese only once");
            }
        };
        this.addTomatoe = () => {
            if (iTomatoeAdded <= 1) {
                calories += 20;
                iTomatoeAdded += 1;
            } else if (ibite > 0) {
                console.log("Sorry, you can not add tomatoe");
            } else {
                console.log("Sorry, you can add Tomatoe only twice");
            }
        };
        this.AddSecretIngredient = () => {
            if (bCheeseAdded || iTomatoeAdded > 0) {
                console.log("Sorry, you can add secret ingredient only before other ingredients");
            } else if (bIngredientAdded) {
                console.log("Sorry, you can add secret ingredient only once.");
            } else if (ibite > 0) {
                console.log("Sorry, you can not add secret ingredient");
            } else {
                bIngredientAdded = true;
                calories = calories + 100;
            }
        }
        if (addSecret) {
            this.AddSecretIngredient();
        }
        this.bite = () => {
            ibite += 1;
        }
        this.info = () => {
            var infotext = `${type} hamburger: `;
            if (bIngredientAdded) {
                infotext += ` with secret ingredient`;
            }
            if (bCheeseAdded) {
                infotext += `, with cheese `;
            }
            if (iTomatoeAdded > 0) {
                infotext += `, with ${iTomatoeAdded} tomatoe `;
            }
            if (ibite > 0) {
                infotext += `, is bit ${ibite} times`;
            }
            infotext += `. Total calories: ${calories} `;
            return infotext;
        }
    }
}

const myHumburger = new Hamburger('classic', 600, true);

myHumburger.bite();
myHumburger.bite();
myHumburger.bite();
myHumburger.bite();
myHumburger.info();

console.log(myHumburger.info());