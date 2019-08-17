class Hamburger {
    constructor(type, calories) {
        this.type = type;
        this.getCalories = () => calories;
        this.setCalories = (value) => calories = value;
    }
}

const myHumburger = new Hamburger('classic', 600)

console.log(myHumburger.getCalories()); // --> 600
myHumburger.setCalories(700);
console.log(myHumburger.getCalories()); // --> 700