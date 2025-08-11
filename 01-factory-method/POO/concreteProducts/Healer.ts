import { Character } from "../product/Character";

class Healer implements Character {
  class = 'Healer'

  attack(): void {
    console.log(`Healer casts a healing spell!`)
  }

  greet(): void {
    console.log(`Healer says: Healing is my duty!`)
  }
}

export default Healer;
