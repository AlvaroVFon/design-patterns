import { Strategy } from "../strategy";

class SwordStrategy implements Strategy {
  attack(): string {
    return "This is a sword attack";
  }
}

export default SwordStrategy;
