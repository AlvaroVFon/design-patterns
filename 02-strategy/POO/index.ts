import CharacterAttack from "../POO/context";
import SwordStrategy from "../POO/strategies/SwordStrategy";
import SpellStrategy from "../POO/strategies/SpellStrategy";

const characterAttack = new CharacterAttack(new SwordStrategy());
characterAttack.attack();

characterAttack.setStrategy(new SpellStrategy());
characterAttack.attack();
