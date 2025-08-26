import Observer from "../observer/Observer";

class Warrior implements Observer {
  update(event: string): void {
    console.log(`Warrior: Received event - ${event}. Ready for battle!`);
  }
}

export default Warrior;
