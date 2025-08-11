import { Character } from "../product/Character";

abstract class CharacterCreator {
  protected character: Character

  constructor() {
    this.character = this.factoryMethod()
  }

  abstract factoryMethod(): Character

  attack(): void {
    this.character.attack()
  }

  greet() {
    this.character.greet()
  }
}

export default CharacterCreator;
