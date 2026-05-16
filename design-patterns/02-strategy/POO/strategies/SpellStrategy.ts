import { Strategy } from "../strategy";

class SpellStrategy implements Strategy {
  attack(): string {
    return "This is a spell attack";
  }
}

export default SpellStrategy;
