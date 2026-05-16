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
  - [Singleton (POO)](#singleton-poo)
  - [Builder (POO)](#builder-poo)
  - [Builder (Funcional)](#builder-funcional)

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
  cd design-patterns/01-factory-method/POO
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
cd design-patterns/01-factory-method/functional
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

`design-patterns/02-strategy/POO/strategy.ts`

```typescript
export interface Strategy {
  attack(): void;
}
```

`design-patterns/02-strategy/POO/strategies/SwordStrategy.ts`

```typescript
import { Strategy } from "../strategy";

class SwordStrategy implements Strategy {
  attack(): string {
    return "This is a sword attack";
  }
}

export default SwordStrategy;
```

`design-patterns/02-strategy/POO/strategies/SpellStrategy.ts`

```typescript
import { Strategy } from "../strategy";

class SpellStrategy implements Strategy {
  attack(): string {
    return "This is a spell attack";
  }
}

export default SpellStrategy;
```

`design-patterns/02-strategy/POO/context.ts`

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

`design-patterns/02-strategy/POO/index.ts`

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

`design-patterns/02-strategy/functional/strategy.ts`

```typescript
export type Strategy = () => void;
```

`design-patterns/02-strategy/functional/strategies.ts`

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

`design-patterns/02-strategy/functional/context.ts`

```typescript
import { Strategy } from "./strategy";

export function characterAttack(strategy: Strategy) {
  return console.log(strategy());
}
```

`design-patterns/02-strategy/functional/index.ts`

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
cd design-patterns/03-observer/POO
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
cd design-patterns/03-observer/functional
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
cd design-patterns/04-adapter/POO
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

# Singleton (POO)

El patrón **Singleton** asegura que una clase tenga una única instancia y proporciona un punto de acceso global a ella.

### 🎯 Propósito

Garantizar una sola instancia de una clase (por ejemplo, un único Rey o un único Boss Dragon) y controlar el acceso a ella.

### 🤔 Problema que Resuelve

En un juego RPG, solo debería existir un Rey en el reino o un único Boss Dragon. El patrón Singleton evita crear múltiples instancias y centraliza el estado global.

### 🏗️ Estructura

```
Singleton
├── instance: Singleton (static, private)
├── constructor: private
└── getInstance(): Singleton (static)
```

### 💡 Implementación

`design-patterns/05-singleton/POO/singleton.ts`

```typescript
export class Singleton {
  static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!this.instance) {
      this.instance = new Singleton();
    }

    return this.instance;
  }
}
```

### 🚀 Uso del Patrón

```typescript
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log(s1 === s2); // true
```

### ✅ Ventajas

1. **Control de instancia única**: Garantiza que solo exista una instancia
2. **Lazy initialization**: La instancia se crea solo cuando se necesita
3. **Punto de acceso global**: Fácil acceso desde cualquier parte

### ❌ Desventajas

1. **Acoplamiento**: Introduce estado global difícil de mantener
2. **Testabilidad**: Dificulta las pruebas unitarias al no poder aislar la instancia
3. **Concurrencia**: Puede dar problemas en entornos multi-thread

### 🎯 Cuándo Usar

- Cuando necesitas exactamente una instancia de una clase
- Cuando el control de acceso a un recurso compartido debe ser centralizado
- Para objetos que deben ser únicos en el sistema (configuración, logging, etc.)

### 🧠 Nota: ¿Por qué no hay versión Funcional?

Singleton resuelve un problema propio de POO: controlar que una clase solo tenga una instancia. En programación funcional no hay clases, instancias ni constructores privados. Los módulos ES ya son singletons por naturaleza (Node cachea el módulo tras la primera importación), por lo que una constante exportada es suficiente:

```typescript
// Esto ya es "singleton" sin ningún patrón
export const king = { name: "Arthur", hp: 100 };
```

Un equivalente con lazy initialization sería un closure:

```typescript
const createSingleton = <T>(factory: () => T) => {
  let instance: T | null = null;
  return (): T => {
    if (!instance) instance = factory();
    return instance;
  };
};

export const getKing = createSingleton(() => ({ name: "Arthur", hp: 100 }));
```

Pero esto es simplemente usar mecanismos base del lenguaje (closures, módulos) — no constituye un patrón de diseño digno de documentación aparte. Por eso este patrón solo tiene implementación POO.

---

# Builder (POO)

El patrón **Builder** permite construir objetos complejos paso a paso, separando el proceso de construcción de la representación final.

### 🎯 Propósito

Construir un objeto complejo (por ejemplo, un personaje con atributos configurables) mediante una interfaz fluida que permite personalizar cada paso de la construcción.

### 🤔 Problema que Resuelve

Crear un personaje con múltiples atributos opcionales (armadura, arma, etc.) usando un constructor con muchos parámetros es confuso y propenso a errores. Builder permite una construcción clara y escalonada.

### 🏗️ Estructura

```
Builder<T> (interface)
└── build(): T

ConcreteBuilder (MageBuilder implements Builder<Mage>)
├── mage: Mage (private)
├── withArmor(armor: string): MageBuilder
├── withWeapon(weapon: string): MageBuilder
└── build(): Mage

Product (Mage)
├── name: string
├── armor: string | null
├── weapon: string | null
├── attack(): void
└── defend(): void
```

### 💡 Implementación

#### 1. Interfaz Builder

`design-patterns/06-builder/POO/builder/builder.ts`

```typescript
export interface Builder<T> {
  build(): T;
}
```

#### 2. Producto

`design-patterns/06-builder/POO/characters/Mage.ts`

```typescript
export class Mage {
  name: string;
  armor: string | null = null;
  weapon: string | null = null;

  constructor(name: string) {
    this.name = name;
  }

  attack(): void {
    console.log(`Mage casts a fireball!`);
  }

  defend(): void {
    console.log(`Mage conjures a magical shield!`);
  }
}
```

#### 3. Builder Concreto

`design-patterns/06-builder/POO/concreteBuilders/mageBuilder.ts`

```typescript
export class MageBuilder implements Builder<Mage> {
  private readonly mage: Mage;

  constructor() {
    this.mage = new Mage("Gandalf");
  }

  withArmor(armor: string): MageBuilder {
    this.mage.armor = armor;
    return this;
  }

  withWeapon(weapon: string): MageBuilder {
    this.mage.weapon = weapon;
    return this;
  }

  build(): Mage {
    return this.mage;
  }
}
```

### 🚀 Uso del Patrón

```typescript
const mageBuilder = new MageBuilder();
const mage = mageBuilder
  .withArmor("Robe of the Archmage")
  .withWeapon("Staff of Power")
  .build();
```

### ✅ Ventajas

1. **Construcción paso a paso**: Permite personalizar objetos complejos de forma clara
2. **API fluida**: Encadenamiento de métodos legible y expresivo
3. **Separación de responsabilidades**: El código de construcción está aislado del producto final
4. **Reutilización**: El mismo builder puede producir diferentes variaciones del producto

### ❌ Desventajas

1. **Boilerplate**: Requiere crear interfaces y clases adicionales
2. **Mutabilidad**: El builder mantiene estado interno durante la construcción
3. **Acoplamiento**: El builder conoce los detalles internos del producto

### 🎯 Cuándo Usar

- Cuando un producto requiere muchos parámetros opcionales
- Cuando quieres separar la lógica de construcción del producto final
- Para evitar constructores con largas listas de parámetros ("telescoping constructors")

---

# Builder (Funcional)

Implementación funcional del patrón **Builder** usando composición de funciones y objetos inmutables.

### 🎯 Propósito

Construir objetos complejos mediante composición de funciones puras, sin efectos secundarios ni estado mutable.

### 🏗️ Estructura Funcional

```
Mage (type)
├── name: string
├── armor: string | null
└── weapon: string | null

Factory Function
└── createMage(name: string): Mage

Builder Functions
├── withArmor(armor: string): (mage: Mage) => Mage
└── withWeapon(weapon: string): (mage: Mage) => Mage

Composition
└── pipe(...fns): (value: T) => T
```

### 💡 Implementación

#### 1. Tipo del Producto

`design-patterns/06-builder/functional/mageBuilder.ts`

```typescript
export interface Mage {
  name: string;
  armor: string | null;
  weapon: string | null;
}

export const createMage = (name: string): Mage => ({
  name,
  armor: null,
  weapon: null,
});
```

#### 2. Funciones Builder (puras e inmutables)

```typescript
export const withArmor = (armor: string) => (mage: Mage): Mage => ({
  ...mage,
  armor,
});

export const withWeapon = (weapon: string) => (mage: Mage): Mage => ({
  ...mage,
  weapon,
});
```

#### 3. Composición con pipe

`design-patterns/06-builder/functional/builder.ts`

```typescript
export const pipe = <T>(...fns: Array<(value: T) => T>) => (value: T): T =>
  fns.reduce((acc, fn) => fn(acc), value);
```

### 🚀 Uso del Patrón

```typescript
const mage = pipe(
  withArmor("Robe of the Archmage"),
  withWeapon("Staff of Power"),
)(createMage("Gandalf"));
```

### 🔄 Comparación: POO vs Funcional

| Aspecto | POO | Funcional |
|---------|-----|-----------|
| **Abstracción** | Interfaz `Builder<T>` | Tipo `Mage` + funciones |
| **Construcción** | Métodos que mutan estado interno | Funciones que retornan nuevos objetos |
| **Estado** | Mutable dentro del builder | Inmutable (spread operator) |
| **API** | Fluent API con `return this` | Composición con `pipe` |
| **Testabilidad** | Requiere instanciar builder | Funciones puras sin setup |

### ✅ Ventajas del Enfoque Funcional

1. **Inmutabilidad**: Cada paso crea un nuevo objeto, sin efectos secundarios
2. **Composición**: Las funciones builder se combinan fácilmente con `pipe`
3. **Simplicidad**: Sin clases ni interfaces adicionales
4. **Testeo**: Funciones puras sin setup complejo

### ❌ Desventajas del Enfoque Funcional

1. **Creación de objetos**: Cada paso crea un nuevo objeto (mayor presión en GC)
2. **Sin validación diferida**: No se puede validar el estado intermedio fácilmente

### 🎯 Cuándo Usar

- Cuando priorizas inmutabilidad y funciones puras
- Cuando el producto es simple y no requiere validaciones complejas
- Para composición declarativa y pipelines de transformación de datos

---
