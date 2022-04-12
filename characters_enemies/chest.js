// chest class to generate the chest objects with random or preset contents.
const Enemy = require('./enemyClass.js');


class Chest {

   constructor(trap) {
      this.open = false;
      this.gold = 0;
      this.healPots = 0;
      this.antPot = 0;
      this.trap = trap;
   }

   contents() {
      if (this.trap) {
         //this = new Enemy("Mimic", 10, 13, 5);
         console.log("As you open the chest, you hear a slight *click* and a trap that is there gets triggered.");
      } else {
         this.gold = Math.floor(Math.random() * 10 + Math.random() * 100 + Math.random() * 1000);
         this.healPots = Math.floor(Math.random() * 10);
         this.antPot = Math.floor(Math.random() * 10);

         console.log("As you open the chest, you find %d gold pieces, %d health potions, and %d antidotes", this.gold, this.healPots, this.antPot);
      }
   }


}

module.exports = Chest