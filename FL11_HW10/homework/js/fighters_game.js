   function Fighter(input) {
  let loses = 0;
  let wins = 0;
  let currenthp = 100;
  let maxhp =100;
  let minhp =0;
        return {
            getName: () => input.name,
            getDamage: () => input.damage,
            getAgility: () => input.agility,
            getHealth: () => input.hp,
            addWin: () => wins++,
            addLoss: () => loses++,
            heal:( healvalue) => {  
              currenthp += healvalue;
              if (currenthp >= maxhp) {
                currenthp= maxhp;
              }
            }, 
            dealDamage:(damagevalue) => {  
              currenthp -= damagevalue;
              if (currenthp <= minhp) {
                currenthp = minhp;
              }
            }, 
            logCombatHistory: () => console.log('Name: '+ input.name +', Wins: ' +wins+', Losses: '+ loses),
            attack:(secondplayer) => {
              let percentage = 100;
              let agilepercentage = secondplayer.getAgility()/percentage;
                if (Math.random() <= agilepercentage){
                 console.log( input.name + ' makes ' + input.damage +' damage ' + 'to ' + secondplayer.getName() +'' ); 
                } else {
                  console.log( input.name + 'attack missed'); 
                }
            }
         
         }
    }
    
  
  
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25}); // returns an object with methods
 //console.log(myFighter);

const myFighter2 = new Fighter({name: 'Peter', damage: 40, hp: 100, agility: 35}); // returns an object with methods

//let name = myFighter.name;
//console.log(name); // undefined

myFighter.attack(myFighter2);
// John make 20 damage to Jack
myFighter2.attack(myFighter);
// Jack attack missed
