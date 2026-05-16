# Learning Roadmap

Study roadmap for design patterns, testing, SOLID principles, and software architecture.

## Repository Structure

```
design-patterns/     → GoF design patterns (POO + functional)
solid/               → SOLID principles with examples
testing/             → Testing guides, TDD, best practices
architecture/        → Architectural patterns (Hexagonal, Clean, CQRS, etc.)
```

---

# Phase 1: Design Patterns (GoF)

Current progress in `design-patterns/`:

| #   | Pattern        | Type       | POO | Functional |
| --- | -------------- | ---------- | :-: | :--------: |
| 01  | Factory Method | Creational | ✅  |     ✅     |
| 02  | Strategy       | Behavioral | ✅  |     ✅     |
| 03  | Observer       | Behavioral | ✅  |     ✅     |
| 04  | Adapter        | Structural | ✅  |     ❌     |
| 05  | Singleton      | Creational | ✅  |     ❌     |
| 06  | Builder        | Creational | ✅  |     ✅     |

## Creational

- [x] **05 — Singleton** — Ensure a class has only one instance (e.g. single King or Boss Dragon)
- [x] **06 — Builder** — Construct complex objects step by step (e.g. character creation with configurable attributes)
- [ ] **07 — Abstract Factory** — Create families of related objects without specifying concrete classes (e.g. factions: humans, orcs, elves)
- [ ] **08 — Prototype** — Clone existing objects without depending on their classes (e.g. duplicate enemies with initial state)

## Structural

- [ ] **09 — Decorator** — Attach responsibilities to objects dynamically (e.g. equipment that enhances characters: sword + fire, armor + shield)
- [ ] **10 — Facade** — Provide a unified interface to a complex system (e.g. simplify the entire combat system)
- [ ] **11 — Proxy** — Control access to another object (e.g. lazy loading resources, access control)
- [ ] **12 — Composite** — Compose objects into tree structures (e.g. squads/parties of characters)
- [ ] **13 — Bridge** — Decouple an abstraction from its implementation (e.g. separate characters from their abilities/weapons)
- [ ] **14 — Flyweight** — Share common data across many objects to save memory (e.g. shared stats among thousands of enemies)

## Behavioral

- [ ] **15 — Command** — Encapsulate a request as an object (e.g. skill/action system: attack, heal, defend)
- [ ] **16 — State** — Allow an object to alter its behavior when its internal state changes (e.g. character states: normal, poisoned, berserker, paralyzed)
- [ ] **17 — Template Method** — Define the skeleton of an algorithm (e.g. mission/quest algorithm skeleton)
- [ ] **18 — Mediator** — Reduce communication dependencies between objects (e.g. quest board / chat room between characters)
- [ ] **19 — Chain of Responsibility** — Pass a request along a chain of handlers (e.g. action validation pipeline, chain of command)
- [ ] **20 — Iterator** — Traverse a collection without exposing its internal representation (e.g. traverse character inventory)
- [ ] **21 — Visitor** — Separate algorithms from the objects they operate on (e.g. operations on character hierarchy without modifying classes)
- [ ] **22 — Memento** — Capture and externalize an object's internal state for later restoration (e.g. save points, checkpoints)
- [ ] **23 — Interpreter** — Evaluate sentences in a language (e.g. interpret text commands in a dungeon)
  > **Note:** Patterns 05–23 go into `design-patterns/` following the existing numbering and convention.

---

# Phase 2: Testing

Located in `testing/`.

## 2.1 Node Native Test Runner

- Use `node:test` + `node:assert/strict`
- Use **tsx** as the TypeScript loader: `node --import tsx --test`
- Colocate tests next to source: `pattern.test.ts`
- `npm run test` script to run all tests

## 2.2 TDD (Test-Driven Development)

Apply Red–Green–Refactor to every new implementation:

1. **Red** — Write a failing test first
2. **Green** — Write the minimal code to make it pass
3. **Refactor** — Improve the code while keeping tests green

Each new pattern in Phase 1 must be implemented using TDD.

## 2.3 Testing Guide

- **What to test:** Public behavior, interface contracts, edge cases
- **What NOT to test:** Internal details, trivial getters/setters, private implementations
- **Structure:** Arrange–Act–Assert (AAA)
- **Test doubles:** Use `mock.fn()` and `mock.method()` from `node:test` (no external mocking libraries)
- **Coverage progression:** Happy path → Edge cases → Error scenarios

## 2.4 Test Types

| Type           | Scope                   | Example                                                                      |
| -------------- | ----------------------- | ---------------------------------------------------------------------------- |
| Unit           | Single class / function | Test `SwordStrategy.attack()` in isolation                                   |
| Integration    | Multiple units together | Subject + Observers working together                                         |
| Property-based | Pure functions          | `createCharacter("warrior")` always returns a character with class "Warrior" |

---

# Phase 3: SOLID Principles

Located in `solid/`.

Each principle with a before/after example refactoring "bad" code:

| Principle                       | Refactoring Example                                                         |
| ------------------------------- | --------------------------------------------------------------------------- |
| **SRP** — Single Responsibility | `Character` doing everything → split into `Movement`, `Combat`, `Inventory` |
| **OCP** — Open/Closed           | Skill system with if/else → open for extension via Strategy                 |
| **LSP** — Liskov Substitution   | Broken `Enemy` hierarchy → correct substitutions with contracts             |
| **ISP** — Interface Segregation | Huge `Unit` interface → segregated: `Attackable`, `Movable`, `Healable`     |
| **DIP** — Dependency Inversion  | Concrete dependencies → high-level modules independent of details           |

---

# Phase 4: Architectural Patterns

Located in `architecture/`.

| Pattern                          | RPG Application                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------ |
| **Hexagonal (Ports & Adapters)** | Full RPG: domain (characters, combat) separated from infrastructure (console, persistence) |
| **Clean Architecture**           | Layers: Entities → Use Cases → Interface Adapters → Frameworks                             |
| **CQRS**                         | Commands for writes (create character, attack) vs Queries for reads (status, inventory)    |
| **Event Sourcing**               | Store domain events (CharacterCreated, DragonDefeated) as the source of truth              |

## Recommended Reading Order

1. Hexagonal Architecture (most practical introduction)
2. Clean Architecture (Robert C. Martin)
3. CQRS + Event Sourcing (pair naturally)
4. DDD Tactical (Entities, Value Objects, Aggregates, Domain Events)
5. DDD Strategic (Bounded Contexts, Ubiquitous Language)

---

# Repository Conventions

- **Theme:** RPG/game throughout all examples
- **Structure:** Every topic gets its own root directory with consistent naming
- **Versions:** When applicable, provide both POO (`/POO/`) and functional (`/functional/`) implementations
- **Language:** TypeScript
- **Execution:** `npx ts-node index.ts` inside the pattern directory
- **Testing:** `node --import tsx --test` with Node native test runner
- **Numbering:** Patterns follow `XX-name/` convention
