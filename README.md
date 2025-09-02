# Patrones de Diseño en TypeScript

Este repositorio contiene implementaciones de diferentes patrones de diseño en TypeScript, con ejemplos prácticos y explicaciones detalladas.

## 📋 Tabla de Contenidos

- [Factory Method (POO)](#factory-method-poo)
- [Factory Method (Funcional)](#factory-method-funcional)
- [Strategy (POO)](#strategy-poo)
- [Strategy (Funcional)](#strategy-funcional)
- [Observer (POO)](#observer-poo)
- [Observer (Funcional)](#observer-funcional)
- [Adapter (POO)](#adapter-poo)

## Factory Method (POO)

### 🎯 Propósito

El patrón **Factory Method** es un patrón creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

### 🤔 Problema que Resuelve

Imagina que tienes un juego RPG donde necesitas crear diferentes tipos de personajes (Guerrero, Mago, Pícaro, Sanador). El patrón Factory Method te permite crear diferentes tipos de personajes sin modificar el código existente, delegando la creación específica a las subclases.

### 🏗️ Estructura

```
Creator (CharacterCreator)
├── character: Character (protected)
├── factoryMethod(): Character
├── attack(): void
└── greet(): void

ConcreteCreator (WarriorCreator, MageCreator, RogueCreator, HealerCreator)
└── factoryMethod(): ConcreteCharacter

Product (Character)
├── class: string
├── attack(): void
└── greet(): void

ConcreteProduct (Warrior, Mage, Rogue, Healer)
├── class: string
├── attack(): void
└── greet(): void
```

### 💡 Implementación

#### 1. Interfaz del Producto (Character)

```typescript
export interface Character {
  class: string;
  attack: () => void;
  greet: () => void;
}
```

#### 2. Clase Creadora Abstracta (CharacterCreator)

```typescript
import { Character } from "../product/Character";

abstract class CharacterCreator {
  protected character: Character;

  constructor() {
    // 🏭 Crea el personaje al instanciar el creator
    this.character = this.factoryMethod();
  }

  // 🏭 Factory Method - delega la creación a las subclases
  abstract factoryMethod(): Character;

  // ⚔️ Método que usa el personaje creado para atacar
  attack(): void {
    this.character.attack();
  }

  // 👋 Método que usa el personaje creado para saludar
  greet(): void {
    this.character.greet();
  }
}
```

#### 3. Creadores Concretos

**WarriorCreator:**

```typescript
class WarriorCreator extends CharacterCreator {
  factoryMethod(): Character {
    return new Warrior();
  }
}
```

**MageCreator:**

```typescript
class MageCreator extends CharacterCreator {
  factoryMethod(): Character {
    return new Mage();
  }
}
```

#### 4. Productos Concretos

**Warrior:**

```typescript
class Warrior implements Character {
  class = "Warrior";

  attack(): void {
    console.log(`Warrior attacks with a sword!`);
  }

  greet(): void {
    console.log(`Warrior says: For honor!`);
  }
}
```

**Mage:**

```typescript
class Mage implements Character {
  class = "Mage";

  attack(): void {
    console.log(`Mage casts a fireball!`);
  }

  greet(): void {
    console.log(`Mage says: Knowledge is power!`);
  }
}
```

### 🚀 Uso del Patrón

```typescript
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
```

### ✅ Ventajas

1. **Principio Abierto/Cerrado**: Puedes agregar nuevos tipos de personajes sin modificar código existente
2. **Separación de responsabilidades**: La lógica de creación está separada del uso
3. **Flexibilidad**: Fácil intercambio de personajes
4. **Mantenibilidad**: Código más organizado y fácil de mantener

### ❌ Desventajas

1. **Complejidad**: Puede hacer el código más complejo para casos simples
2. **Jerarquía de clases**: Requiere crear muchas subclases

### 🎯 Cuándo Usar

- Cuando no sabes de antemano los tipos exactos de personajes que necesitarás
- Cuando quieres proporcionar a los usuarios una forma de extender el sistema de personajes
- Cuando quieres reutilizar personajes existentes en lugar de reconstruirlos

### 🔧 Ejecutar el Ejemplo

```bash
cd 01-factory-method/POO
npx ts-node index.ts
```

**Salida esperada:**

```
Warrior attacks with a sword!
Warrior says: For honor!
Mage casts a fireball!
Mage says: Knowledge is power!
Rogue strikes from the shadows!
Rogue says: Silence is golden!
Healer casts a healing spell!
Healer says: Healing is my duty!
```

---

## Factory Method (Funcional)

### 🎯 Propósito

Implementación funcional del patrón **Factory Method** aplicado a la creación de personajes de juego. Esta versión demuestra cómo implementar el patrón usando funciones puras y composición en lugar de clases e herencia.

### 🎮 Contexto

En esta implementación, creamos diferentes tipos de personajes (Guerrero, Mago, Pícaro, Sanador) para un juego RPG, donde cada personaje tiene habilidades únicas de ataque y saludo.

### 🏗️ Estructura Funcional

```
Product (Character Type)
├── class: string
├── attack: () => void
└── greet: () => void

Factory Functions
├── createWarrior(): Character
├── createMage(): Character
├── createRogue(): Character
└── createHealer(): Character

Creator Function
└── createCharacter(type: string): Character
```

### 💡 Implementación

#### 1. Definición del Producto (Character)

```typescript
export type Character = {
  class: string;
  attack: () => void;
  greet: () => void;
};
```

#### 2. Funciones Factory Concretas

```typescript
function createWarrior(): Character {
  return {
    class: "Warrior",
    attack: () => console.log("Warrior attacks with a sword!"),
    greet: () => console.log("Warrior says: For honor!"),
  };
}

function createMage(): Character {
  return {
    class: "Mage",
    attack: () => console.log("Mage casts a fireball!"),
    greet: () => console.log("Mage says: Knowledge is power!"),
  };
}
```

#### 3. Creator Principal

```typescript
const factories: Record<string, () => Character> = {
  warrior: createWarrior,
  mage: createMage,
  healer: createHealer,
  rogue: createRogue,
};

function createCharacter(type: string): Character {
  if (!factories[type]) throw new Error(`Unknown character type: ${type}`);
  return factories[type]();
}
```

### 🚀 Uso del Patrón

```typescript
function main() {
  const warrior = createCharacter("warrior");
  const mage = createCharacter("mage");
  const healer = createCharacter("healer");

  warrior.attack(); // Warrior attacks with a sword!
  mage.attack(); // Mage casts a fireball!
  healer.attack(); // Healer casts a healing spell!

  warrior.greet(); // Warrior says: For honor!
  mage.greet(); // Mage says: Knowledge is power!
  healer.greet(); // Healer says: Healing is my duty!
}
```

### 🔄 Comparación: POO vs Funcional

| Aspecto            | POO                            | Funcional                        |
| ------------------ | ------------------------------ | -------------------------------- |
| **Abstracción**    | Clases abstractas e interfaces | Types e interfaces               |
| **Creación**       | Métodos en clases heredadas    | Funciones puras                  |
| **Estado**         | Propiedades de instancia       | Closures o parámetros            |
| **Extensibilidad** | Herencia de clases             | Composición de funciones         |
| **Complejidad**    | Mayor jerarquía de clases      | Menos boilerplate                |
| **Testeo**         | Mocks y stubs de clases        | Funciones más fáciles de testear |
| **Memoria**        | Instancias de objetos          | Funciones y closures             |

### ✅ Ventajas del Enfoque Funcional

1. **Simplicidad**: Menos código boilerplate
2. **Pureza**: Funciones puras sin efectos secundarios
3. **Composición**: Fácil combinación y reutilización de funciones
4. **Testeo**: Funciones más fáciles de testear de forma aislada
5. **Inmutabilidad**: Los objetos creados son inmutables por diseño

### ❌ Desventajas del Enfoque Funcional

1. **Falta de estado compartido**: Cada personaje es independiente
2. **Menos expresivo**: No aprovecha el polimorfismo orientado a objetos
3. **Escalabilidad**: Puede ser menos organizado en aplicaciones grandes

### 🔧 Ejecutar el Ejemplo

```bash
cd 01-factory-method/functional
npx ts-node index.ts
```

**Salida esperada:**

```
Warrior attacks with a sword!
Mage casts a fireball!
Healer casts a healing spell!
Warrior says: For honor!
Mage says: Knowledge is power!
Healer says: Healing is my duty!
```

---

# Strategy (POO)

El patrón Strategy permite definir una familia de algoritmos, encapsular cada uno y hacerlos intercambiables. Permite que el algoritmo varíe independientemente de los clientes que lo utilizan.

**Estructura:**

- `Strategy`: Interfaz que define el método `attack()`
- Estrategias concretas: `SwordStrategy`, `SpellStrategy`, `BowStrategy`
- Contexto: `CharacterAttack` que usa una estrategia y permite cambiarla

**Ejemplo real:**

`02-strategy/POO/strategy.ts`

```typescript
export interface Strategy {
  attack(): void;
}
```

`02-strategy/POO/strategies/SwordStrategy.ts`

```typescript
import { Strategy } from "../strategy";

class SwordStrategy implements Strategy {
  attack(): string {
    return "This is a sword attack";
  }
}

export default SwordStrategy;
```

`02-strategy/POO/strategies/SpellStrategy.ts`

```typescript
import { Strategy } from "../strategy";

class SpellStrategy implements Strategy {
  attack(): string {
    return "This is a spell attack";
  }
}

export default SpellStrategy;
```

`02-strategy/POO/context.ts`

```typescript
import { Strategy } from "./strategy";

class CharacterAttack {
  constructor(private strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  attack(): void {
    console.log(this.strategy.attack());
  }
}

export default CharacterAttack;
```

`02-strategy/POO/index.ts`

```typescript
import CharacterAttack from "../POO/context";
import SwordStrategy from "../POO/strategies/SwordStrategy";
import SpellStrategy from "../POO/strategies/SpellStrategy";

const characterAttack = new CharacterAttack(new SwordStrategy());
characterAttack.attack();

characterAttack.setStrategy(new SpellStrategy());
characterAttack.attack();
```

**Salida esperada:**

```
This is a sword attack
This is a spell attack
```

---

# Strategy (Funcional)

Implementación funcional del patrón Strategy usando funciones en vez de clases.

**Estructura:**

- `Strategy`: Tipo función que representa una estrategia de ataque
- Estrategias concretas: `swordStrategy`, `spellStrategy`, `bowStrategy`
- Contexto: función `characterAttack` que recibe una estrategia y la ejecuta

**Ejemplo real:**

`02-strategy/functional/strategy.ts`

```typescript
export type Strategy = () => void;
```

`02-strategy/functional/strategies.ts`

```typescript
export function swordStrategy() {
  return "This is a sword attack";
}

export function bowStrategy() {
  return "This is a bow attack";
}

export function spellStrategy() {
  return "This is a spell attack";
}
```

`02-strategy/functional/context.ts`

```typescript
import { Strategy } from "./strategy";

export function characterAttack(strategy: Strategy) {
  return console.log(strategy());
}
```

`02-strategy/functional/index.ts`

```typescript
import { characterAttack } from "./context";
import { swordStrategy, spellStrategy } from "./strategies";

characterAttack(swordStrategy);
characterAttack(spellStrategy);
```

**Salida esperada:**

```
This is a sword attack
This is a spell attack
```

---

# Observer (POO)

El patrón **Observer** permite definir una dependencia uno-a-muchos entre objetos, de modo que cuando uno cambie su estado, todos sus dependientes sean notificados automáticamente. Es ideal para sistemas de eventos y notificaciones.

### 🎯 Propósito

Desacoplar el emisor de eventos (Subject) de los receptores (Observers), permitiendo que los observadores reaccionen a cambios o eventos sin que el sujeto conozca sus detalles.

### 🏗️ Estructura

```
Subject (Dragon)
├── observers: Observer[]
├── attach(observer: Observer): void
├── detach(observer: Observer): void
└── notify(event: string): void

Observer (Mage, Warrior, Archer, Priest)
└── update(event: string): void
```

### 💡 Implementación

#### 1. Interfaz Observer

```typescript
interface Observer {
  update(event: string): void;
}
```

#### 2. Interfaz Subject

```typescript
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(event: string): void;
}
```

#### 3. Subject Concreto (Dragon)

```typescript
class Dragon implements Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(event: string): void {
    console.log(`Dragon: Notifying observers about event: ${event}`);
    for (const observer of this.observers) {
      observer.update(event);
    }
  }
}
```

#### 4. Observers Concretos

```typescript
class Mage implements Observer {
  update(event: string): void {
    console.log(`Mage: Received event - ${event}. Preparing spells!`);
  }
}

class Warrior implements Observer {
  update(event: string): void {
    console.log(`Warrior: Received event - ${event}. Ready for battle!`);
  }
}

class Archer implements Observer {
  update(event: string): void {
    console.log(`Archer: Received event - ${event}. Ready to shoot arrows!`);
  }
}

class Priest implements Observer {
  update(event: string): void {
    console.log(`Priest: Received event - ${event}. Ready to heal!`);
  }
}
```

### 🚀 Uso del Patrón

```typescript
const dragon = new Dragon();
const mage = new Mage();
const warrior = new Warrior();
const archer = new Archer();
const priest = new Priest();

dragon.attach(mage);
dragon.attach(warrior);
dragon.attach(archer);
dragon.attach(priest);

dragon.notify("The dragon has appeared!");

dragon.detach(archer);
dragon.notify("The dragon is attacking!");
```

**Salida esperada:**

```
Dragon: Notifying observers about event: The dragon has appeared!
Mage: Received event - The dragon has appeared!. Preparing spells!
Warrior: Received event - The dragon has appeared!. Ready for battle!
Archer: Received event - The dragon has appeared!. Ready to shoot arrows!
Priest: Received event - The dragon has appeared!. Ready to heal!
Dragon: Notifying observers about event: The dragon is attacking!
Mage: Received event - The dragon is attacking!. Preparing spells!
Warrior: Received event - The dragon is attacking!. Ready for battle!
Priest: Received event - The dragon is attacking!. Ready to heal!
```

### ✅ Ventajas

1. Desacopla el emisor de los receptores
2. Permite agregar/quitar observadores dinámicamente
3. Facilita la extensión y reutilización

### ❌ Desventajas

1. Puede generar dependencias circulares
2. Difícil de depurar en sistemas grandes

### 🔧 Ejecutar el Ejemplo

```bash
cd 03-observer/POO
npx ts-node index.ts
```

---

# Observer (Funcional)

Implementación funcional del patrón **Observer** usando funciones y composición, ideal para sistemas reactivos y de eventos en JavaScript/TypeScript.

### 🎯 Propósito

Permitir que múltiples funciones (observadores) reaccionen a eventos emitidos por un sujeto, sin acoplamiento entre ellos.

### 🏗️ Estructura Funcional

```
Subject (createSubject)
├── observers: Observer[]
├── attach(observer: Observer): void
├── detach(observer: Observer): void
└── notify(event: string): void

Observer (mage, warrior, archer, priest)
└── (event: string) => void
```

### 💡 Implementación

#### 1. Tipo Observer

```typescript
export type Observer = (event: string) => void;
```

#### 2. Interfaz Subject

```typescript
export interface Subject {
  attach(observer: (event: string) => void): void;
  detach(observer: (event: string) => void): void;
  notify(event: string): void;
}
```

#### 3. Subject Concreto

```typescript
export const createSubject = (): Subject => {
  let observers: Observer[] = [];

  function attach(observer: Observer): void {
    observers.push(observer);
  }

  function detach(observer: Observer): void {
    observers = observers.filter((obs) => obs !== observer);
  }

  function notify(event: string): void {
    for (const observer of observers) {
      observer(event);
    }
  }

  return { attach, detach, notify };
};
```

#### 4. Observers Concretos

```typescript
export const mage: Observer = (event: string) => {
  console.log(`Mage: Received event - ${event}. Preparing spells!`);
};

export const warrior: Observer = (event: string) => {
  console.log(`Warrior: Received event - ${event}. Ready for battle!`);
};

export const archer: Observer = (event: string) => {
  console.log(`Archer: Received event - ${event}. Ready to shoot arrows!`);
};

export const priest: Observer = (event: string) => {
  console.log(`Priest: Received event - ${event}. Healing allies!`);
};
```

### 🚀 Uso del Patrón

```typescript
const dragon = createSubject();
dragon.attach(mage);
dragon.attach(warrior);
dragon.attach(archer);
dragon.attach(priest);

dragon.notify("The dragon has appeared!");

dragon.detach(archer);
dragon.notify("The dragon is attacking!");
```

**Salida esperada:**

```
Mage: Received event - The dragon has appeared!. Preparing spells!
Warrior: Received event - The dragon has appeared!. Ready for battle!
Archer: Received event - The dragon has appeared!. Ready to shoot arrows!
Priest: Received event - The dragon has appeared!. Healing allies!
Mage: Received event - The dragon is attacking!. Preparing spells!
Warrior: Received event - The dragon is attacking!. Ready for battle!
Priest: Received event - The dragon is attacking!. Healing allies!
```

### ✅ Ventajas

1. Sencillez y bajo acoplamiento
2. Fácil de testear y extender
3. Composición funcional

### ❌ Desventajas

1. Menos expresivo para sistemas complejos
2. No hay polimorfismo clásico

### 🔧 Ejecutar el Ejemplo

```bash
cd 03-observer/functional
npx ts-node index.ts
```

---

# Adapter (POO)

El patrón **Adapter** permite que dos interfaces incompatibles colaboren, actuando como un traductor entre ellas. Es útil cuando quieres reutilizar código existente que no encaja con la interfaz que espera tu sistema.

### 🎯 Propósito

Adaptar la interfaz de una clase existente (`Creature`) para que pueda ser utilizada como si implementara otra interfaz (`Character`).

### 🤔 Problema que Resuelve

Supón que tienes una clase `Dragon` que implementa la interfaz `Creature`, pero tu sistema espera objetos que implementen la interfaz `Character`. El Adapter permite envolver el `Dragon` y usarlo como si fuera un `Character`, sin modificar la clase original.

### 🏗️ Estructura

```
Character (interface)
├── attack(): void
├── takeDamage(amount: number): void
└── showStatus(): number

Creature (interface)
├── strike(): void
├── receiveDamage(amount: number): void
└── getState(): number

CreatureAdapter (implements Character)
└── creature: Creature
    ├── attack() → strike()
    ├── takeDamage() → receiveDamage()
    └── showStatus() → getState()
```

### 💡 Implementación

#### 1. Interfaces

```typescript
// interfaces/Character.ts
export interface Character {
  attack: () => void;
  takeDamage: (amount: number) => void;
  showStatus: () => number;
}

// interfaces/Creature.ts
export interface Creature {
  strike: () => void;
  receiveDamage: (amount: number) => void;
  getState(): number;
}
```

#### 2. Clase a adaptar

```typescript
// creatures/Dragon.ts
import { Creature } from "../interfaces/Creature";

export class Dragon implements Creature {
  private health = 1000;
  strike() {
    console.log(`The dragon exales a fire breath!`);
  }

  receiveDamage(damage: number) {
    console.log(`The dragon received ${damage} points of damage`);
    this.health -= damage;
  }

  getState() {
    console.log(`Dragon HP: ${this.health}`);
    return this.health;
  }
}
```

#### 3. Adapter

```typescript
// adapters/creature.adapter.ts
import type { Character } from "../interfaces/Character";
import type { Creature } from "../interfaces/Creature";

export class CreatureAdapter implements Character {
  constructor(private creature: Creature) {}

  attack() {
    this.creature.strike();
  }

  takeDamage(amount: number) {
    return this.creature.receiveDamage(amount);
  }

  showStatus() {
    return this.creature.getState();
  }
}
```

#### 4. Cliente usando el Adapter

```typescript
// index.ts
import { Mage } from "./characters/Mage";
import { Dragon } from "./creatures/Dragon";
import { CreatureAdapter } from "./adapters/creature.adapter";
import { Character } from "./interfaces/Character";

const mage = new Mage();
const dragon = new Dragon();
const adapteeDragon = new CreatureAdapter(dragon);

function activateCharacter(character: Character) {
  character.attack();
  character.takeDamage(15);
  character.showStatus();
}

activateCharacter(adapteeDragon);
activateCharacter(mage);
```

### 🚀 Uso del Patrón

```bash
cd 04-adapter/POO
npx ts-node index.ts
```

**Salida esperada:**

```
The dragon exales a fire breath!
The dragon received 15 points of damage
Dragon HP: 985
The mage throw a fireball!
The mage has received 15 points of damage!
Mage HP: 85
```

### ✅ Ventajas

1. Permite reutilizar código existente sin modificarlo
2. Desacopla el cliente de la implementación concreta
3. Facilita la integración de sistemas con interfaces incompatibles

### ❌ Desventajas

1. Puede añadir una capa extra de complejidad
2. Si hay muchas adaptaciones, puede dificultar el mantenimiento

### 🎯 Cuándo Usar

- Cuando necesitas usar una clase existente pero su interfaz no es compatible
- Cuando quieres integrar sistemas de terceros sin modificar su código
- Cuando buscas desacoplar el cliente de la implementación concreta

---
