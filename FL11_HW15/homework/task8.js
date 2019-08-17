class Hamburger {
    constructor(type, calories, addSecret = false) {
        var bCheeseAdded = false;
        var bIngredientAdded = false;
        var iTomatoAdded = 0;
        var ibite = 0;

        this.type = type;
        this.getCalories = () => calories;
        this.setCalories = (value) => calories = value;
        this.addCheese = () => {
            if (ibite > 0) {
                console.log("Sorry, you can not add cheese");
            } else if (!bCheeseAdded) {
                calories = calories + 120;
                bCheeseAdded = true;
            } else {
                console.log("Sorry, you can add Cheese only once");
            }
        };
        this.addTomato = () => {
            if (ibite > 0) {
                console.log("Sorry, you can not add tomatoe");
            } else if (iTomatoAdded <= 1) {
                calories += 20;
                iTomatoAdded += 1;
            } else {
                console.log("Sorry, you can add Tomatoe only twice");
            }
        };
        this.AddSecretIngredient = () => {
            if (ibite > 0) {
                console.log("Sorry, you can not add secret ingredient");
            } else if (bCheeseAdded || iTomatoAdded > 0) {
                console.log("Sorry, you can add secret ingredient only before other ingredients");
            } else if (bIngredientAdded) {
                console.log("Sorry, you can add secret ingredient only once.");
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
            if (iTomatoAdded > 0) {
                infotext += `, with ${iTomatoAdded} tomatoe `;
            }
            if (ibite > 0) {
                infotext += `, is bit ${ibite} times`;
            }
            infotext += `. Total calories: ${calories} `;
            return infotext;
        }
    }
}

const myHumburger = new Hamburger('classic', 600);

myHumburger.AddSecretIngredient();
myHumburger.addTomato();
myHumburger.addCheese();
myHumburger.bite();
myHumburger.bite();
myHumburger.bite();

console.log(myHumburger.info());
/*'classic hamburger:  with secret ingredient, with cheese , with 1 tomatoe , is bit 3 times. Total calories: 840 '*/