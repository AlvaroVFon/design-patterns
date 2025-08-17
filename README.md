# Patrones de Diseño en TypeScript

Este repositorio contiene implementaciones de diferentes patrones de diseño en TypeScript, con ejemplos prácticos y explicaciones detalladas.

## 📋 Tabla de Contenidos

- [Factory Method (POO)](#factory-method-poo)
- [Factory Method (Funcional)](#factory-method-funcional)
- [Strategy (POO)](#strategy-poo)
- [Strategy (Funcional)](#strategy-funcional)


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
  const warrior = createCharacter('warrior')
  const mage = createCharacter('mage')
  const healer = createCharacter('healer')

  warrior.attack()  // Warrior attacks with a sword!
  mage.attack()     // Mage casts a fireball!
  healer.attack()   // Healer casts a healing spell!
  
  warrior.greet()   // Warrior says: For honor!
  mage.greet()      // Mage says: Knowledge is power!
  healer.greet()    // Healer says: Healing is my duty!
}
```

### 🔄 Comparación: POO vs Funcional

| Aspecto | POO | Funcional |
|---------|-----|-----------|
| **Abstracción** | Clases abstractas e interfaces | Types e interfaces |
| **Creación** | Métodos en clases heredadas | Funciones puras |
| **Estado** | Propiedades de instancia | Closures o parámetros |
| **Extensibilidad** | Herencia de clases | Composición de funciones |
| **Complejidad** | Mayor jerarquía de clases | Menos boilerplate |
| **Testeo** | Mocks y stubs de clases | Funciones más fáciles de testear |
| **Memoria** | Instancias de objetos | Funciones y closures |

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