   function Fighter(input) {
       let loses = 0;
       let wins = 0;
       let currenthp = input.hp;
       let maxhp = input.hp;
       let minhp = 0;
       return {
           getName: () => input.name,
           getDamage: () => input.damage,
           getAgility: () => input.agility,
           getHealth: () => currenthp,
           addWin: () => wins++,
           addLoss: () => loses++,
           heal: (healvalue) => {
               currenthp += healvalue;
               if (currenthp >= maxhp) {
                   currenthp = maxhp;
               }
           },
           dealDamage: (damagevalue) => {
               currenthp -= damagevalue;
               if (currenthp <= minhp) {
                   currenthp = minhp;
               }
           },
           logCombatHistory: () => {
               console.log('Name: ' + input.name + ', Wins: ' + wins + ', Losses: ' + loses);
           },
           attack: (secondplayer) => {
               let percentage = 100;
               let agilepercentage = secondplayer.getAgility() / percentage;
               if (Math.random() <= agilepercentage) {
                   let damage = input.damage;
                   console.log(input.name + ' makes ' + damage + ' damage ' + 'to ' + secondplayer.getName() + '');
                   secondplayer.dealDamage(damage);
               } else {
                   console.log(input.name + ' attack missed');
               }
           }

       }
   }

   function battle(fighter1, fighter2) {
       let health1 = fighter1.getHealth();
       let health2 = fighter2.getHealth();
       let informdeath = ' is dead and can`t fight';
       if (health1 === 0) {
           console.log(fighter1.getName() + informdeath);
       } else if (health2 === 0) {
           console.log(fighter2.getName() + informdeath);
       } else {
           while (health1 !== 0 && health2 !== 0) {
               fighter1.attack(fighter2);
               health2 = fighter2.getHealth();
               if (health2 > 0) {
                   //dead can not attack 
                   fighter2.attack(fighter1);
                   health1 = fighter1.getHealth();
               }
               //console.log(health2 +"    "+ health1);
           }

           if (health1 === 0) {
               fighter2.addWin();
               fighter1.addLoss();
           } else {
               fighter1.addWin();
               fighter2.addLoss();
           }
       }

   }

   const myFighter = new Fighter({
       name: 'John',
       damage: 20,
       hp: 100,
       agility: 25
   });

   const myFighter2 = new Fighter({
       name: 'Peter',
       damage: 40,
       hp: 100,
       agility: 35
   });

   battle(myFighter, myFighter2)