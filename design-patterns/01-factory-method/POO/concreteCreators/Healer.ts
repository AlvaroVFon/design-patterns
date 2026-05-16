import CharacterCreator from "../creator/CharacterCreator";
import type { Character } from "../product/Character";
import Healer from "../concreteProducts/Healer";

class HealerCreator extends CharacterCreator {
  factoryMethod(): Character {
    return new Healer();
  }
}

export default HealerCreator;
