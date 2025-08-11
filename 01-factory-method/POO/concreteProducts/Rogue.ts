import { Character } from "../product/Character";

class Rogue implements Character {
  class = 'Rogue'

  attack(): void {
    console.log(`Rogue strikes from the shadows!`)
  }

  greet(): void {
    console.log(`Rogue says: Silence is golden!`)
  }
}

export default Rogue;
