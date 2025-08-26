import Observer from "../observer/Observer";

class Archer implements Observer {
  public update(event: string): void {
    console.log(`Priest: Received event - ${event}. Ready to heal!`);
  }
}

export default Archer;
