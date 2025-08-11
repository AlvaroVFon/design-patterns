import CharacterCreator from "../creator/CharacterCreator";
import type { Character } from "../product/Character";
import Mage from "../concreteProducts/Mage";

class MageCreator extends CharacterCreator {
  factoryMethod(): Character {
    return new Mage();
  }
}

export default MageCreator;
