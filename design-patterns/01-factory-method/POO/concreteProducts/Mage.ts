import { Character } from "../product/Character";

class Mage implements Character {
  class = 'Mage'

  attack(): void {
    console.log(`Mage casts a fireball!`)
  }

  greet(): void {
    console.log(`Mage says: Knowledge is power!`)
  }
}

export default Mage;
