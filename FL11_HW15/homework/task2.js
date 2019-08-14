class Hamburger {

    constructor(type, calories) {
        this.type = type;
        let _calories = calories;
        this.getCalories = () => calories;
        this.setCalories = (value) => calories = value;
    }

}
const myHumburger = new Hamburger('classic', 600)

console.log(myHumburger.getCalories());
myHumburger.setCalories(700);
console.log(myHumburger.getCalories());