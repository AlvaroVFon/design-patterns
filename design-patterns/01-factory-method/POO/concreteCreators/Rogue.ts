import CharacterCreator from "../creator/CharacterCreator";
import Rogue from "../concreteProducts/Rogue";
import { Character } from "../product/Character";

class RogueCreator extends CharacterCreator {
  factoryMethod(): Character {
    return new Rogue();
  }
}

export default RogueCreator;
