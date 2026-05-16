import type { Character } from '../interfaces/Character'

export class Mage implements Character {
  private health = 100

  attack() {
    console.log(`The mage throws a fireball!`)
  }

  takeDamage(amount: number) {
    console.log(`The mage has received ${amount} points of damage!`)
    this.health -= amount
  }

  showStatus() {
    console.log(`Mage HP: ${this.health}`)
    return this.health
  }
}
