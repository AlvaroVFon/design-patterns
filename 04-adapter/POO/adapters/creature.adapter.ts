import type { Character } from "../interfaces/Character";
import type { Creature } from "../interfaces/Creature";

export class CreatureAdapter implements Character {
  constructor(private creature: Creature) {}

  attack() {
    this.creature.strike();
  }

  takeDamage(amount: number) {
    return this.creature.receiveDamage(amount);
  }

  showStatus() {
    return this.creature.getState();
  }
}
