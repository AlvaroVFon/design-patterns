import WarriorCreator from "./concreteCreators/Warrior";
import HealerCreator from "./concreteCreators/Healer";
import RogueCreator from "./concreteCreators/Rogue";
import MageCreator from "./concreteCreators/Mage";

function main() {
  const warrior = new WarriorCreator();
  const healer = new HealerCreator();
  const rogue = new RogueCreator();
  const mage = new MageCreator();

  warrior.attack();
  healer.attack();
  rogue.attack();
  mage.attack();

  warrior.greet();
  healer.greet();
  rogue.greet();
  mage.greet();
}

main();
