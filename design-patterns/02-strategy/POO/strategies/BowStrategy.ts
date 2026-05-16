import { Strategy } from "../strategy";

class BowStrategy implements Strategy {
  attack(): string {
    return "This is a bow attack";
  }
}

export default BowStrategy;
