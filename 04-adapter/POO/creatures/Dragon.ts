import { Creature } from '../interfaces/Creature'

export class Dragon implements Creature {
  private health = 1000
  strike() {
    console.log(`The dragon exhales a fire breath!`)
  }

  receiveDamage(damage: number) {
    console.log(`The dragon received ${damage} points of damage`)
    this.health -= damage
  }

  getState() {
    console.log(`Dragon HP: ${this.health}`)
    return this.health
  }
}
