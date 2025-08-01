// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        if (damage > this.health) {
            return "game over"
        } else {
            this.health -= damage;
        }
    }
    }

class Viking extends Soldier {
    super(health, strength, name) {
        this.name = name;
    }
    receiveDamage(damage) {
        if (damage < this.health) {
            this.health -= damage; 
            return `${this.name} has received ${damage} points of damage`
        } else { 
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odins Owns You All!!!!"
    }
}

class Saxon extends Soldier {
    receiveDamage(damage) {
        if (damage < this.health) {
            this.health -= damage;
            return `this Saxon has received &{damage} points of damage`
        } else { return "A Saxon has died in combat"}
    }
}    


// Vikingno


// War
class War {
    constructor(vikingArmy, saxonArmy) {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(saxon);
    }
    addSaxon() {
        this.saxonArmy.push(viking);
    }
    vikingAttack() {
        const randomSaxon = this.SaxonArmy[Math.floor(this.SaxonArmy.length * Math.random)];
        const randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random)];
        const result = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health > result) {
            randomSaxon.health -= result;
        } else { console.log("se ha eliminado un saxon random")
            return this.saxonArmy.splice([Math.floor(this.SaxonArmy.length * Math.random)], 1)
        }
    }
    saxonAttack() {
        const randomSaxon = this.SaxonArmy[Math.floor(this.SaxonArmy.length * Math.random)];
        const randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length * Math.random)];
        const result = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health > result) {
            randomViking.health -= result;
        } else { console.log("se ha eliminado un saxon random")
            return this.VikingArmy.splice([Math.floor(this.VikingArmy.length * Math.random)], 1);
        }
    }
    showStatus() {
        if (this.saxonArmy.length = 0) {
            return "Vikings have won the war of the century!"
        } else if (this.vikingArmy.length = 0) {
            return "Saxon have fought for their lives and survived another day.."
        } else if (this.vikingArmy > 0 && this.saxonArmy > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
        }
    }

