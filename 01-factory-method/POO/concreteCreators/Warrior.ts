import Warrior from "../concreteProducts/Warrior";
import CharacterCreator from "../creator/CharacterCreator";
import { Character } from "../product/Character";

class WarriorCreator extends CharacterCreator {
  factoryMethod(): Character {
    return new Warrior();
  }
}

export default WarriorCreator;
