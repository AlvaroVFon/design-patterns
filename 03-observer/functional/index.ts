import { mage } from "./concreteObservers/Mage";
import { warrior } from "./concreteObservers/Warrior";
import { archer } from "./concreteObservers/Archer";
import { priest } from "./concreteObservers/Priest";
import { createSubject } from "./concreteSubject/ConcreteSubject";

//Subject - event emitter
const dragon = createSubject();

// Observers - event listeners
dragon.attach(mage);
dragon.attach(warrior);
dragon.attach(archer);
dragon.attach(priest);

// Notify observers about an event
dragon.notify("The dragon has appeared!");

// Detach an observer and notify again

dragon.detach(archer);

// Notify observers about another event

dragon.notify("The dragon is attacking!");
