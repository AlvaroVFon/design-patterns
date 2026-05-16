import { Character } from "../product/Character";

class Warrior implements Character {
  class = 'Warrior'

  attack(): void {
    console.log(`Warrior attacks with a sword!`)
  }

  greet(): void {
    console.log(`Warrior says: For honor!`)
  }
}

export default Warrior;
