import Dragon from "./concreteSubject/Dragon";
import Mage from "./concreteObservers/Mage";
import Warrior from "./concreteObservers/Warrior";
import Archer from "./concreteObservers/Archer";
import Priest from "./concreteObservers/Priest";

//Subject - event emitter
const dragon = new Dragon();

//Observers - event listeners
const mage = new Mage();
const warrior = new Warrior();
const archer = new Archer();
const priest = new Priest();

// Attach observers to the subject
dragon.attach(mage);
dragon.attach(warrior);
dragon.attach(archer);
dragon.attach(priest);

// Notify observers about an event
dragon.notify("The dragon has appeared!");

// Detach an observer and notify again

dragon.detach(archer);
dragon.notify("The dragon is attacking!");
