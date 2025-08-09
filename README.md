# Patrones de Diseño en TypeScript

Este repositorio contiene implementaciones de diferentes patrones de diseño en TypeScript, con ejemplos prácticos y explicaciones detalladas.

## 📋 Tabla de Contenidos

- [Factory Method (POO)](#factory-method)

---

## Factory Method (POO)

### 🎯 Propósito

El patrón **Factory Method** es un patrón creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

### 🤔 Problema que Resuelve

Imagina que tienes una aplicación de notificaciones que inicialmente solo enviaba emails. Con el tiempo, necesitas agregar SMS y notificaciones push. El patrón Factory Method te permite crear diferentes tipos de notificaciones sin modificar el código existente.

### 🏗️ Estructura

```
Creator (Notifications)
├── factoryMethod(): Product
└── send(): void

ConcreteCreator (EmailNotification, SMSNotification, PushNotification)
└── factoryMethod(): ConcreteProduct

Product (Notificator)
└── send(message: string): void

ConcreteProduct (Email, SMS, Push)
└── send(message: string): void
```

### 💡 Implementación

#### 1. Interfaz del Producto (Notificator)

```typescript
export interface Notificator<T> {
  send: (message: string) => void;
}
```

#### 2. Clase Creadora Abstracta (Notifications)

```typescript
import { Notificator } from "../interfaces/Notificator";

abstract class Notifications<T> {
  protected destinatario: T;

  constructor(destinatario: T) {
    this.destinatario = destinatario;
  }

  // 🏭 Factory Method - delega la creación a las subclases
  abstract factoryMethod(): Notificator<T>;

  // 📤 Método que usa el factory method
  send(message: string) {
    const notificator = this.factoryMethod();
    notificator.send(message);
  }
}
```

#### 3. Creadores Concretos

**EmailNotification:**
```typescript
class EmailNotification extends Notifications<string> {
  factoryMethod(): Notificator<string> {
    return new EmailNotificator(this.destinatario);
  }
}
```

**SMSNotification:**
```typescript
class SMSNotification extends Notifications<string> {
  factoryMethod() {
    return new SMSNotificator(this.destinatario);
  }
}
```

**PushNotification:**
```typescript
class PushNotification extends Notifications<string> {
  factoryMethod() {
    return new PushNotificator(this.destinatario);
  }
}
```

#### 4. Productos Concretos

**EmailNotificator:**
```typescript
class Email implements Notificator<string> {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  send(message: string): void {
    console.log(`Sending email to ${this.email}: ${message}`);
  }
}
```

**SMSNotificator:**
```typescript
class SMS implements Notificator<string> {
  private phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  send(message: string): void {
    console.log(`Sending SMS to ${this.phoneNumber}: ${message}`);
  }
}
```

**PushNotificator:**
```typescript
class Push implements Notificator<string> {
  constructor(private deviceToken: string) {
    this.deviceToken = deviceToken;
  }

  send(message: string): void {
    console.log(
      `Sending push notification to device ${this.deviceToken}: ${message}`,
    );
  }
}
```

### 🚀 Uso del Patrón

```typescript
function main() {
  const email = new EmailNotification("alvaro@email.com");
  const push = new PushNotification("12312312321");
  const sms = new SMSNotification("888333999");

  email.send("Hello, this is an email notification!");
  push.send("Hello, this is a push notification!");
  sms.send("Hello, this is an SMS notification!");
}
```

### ✅ Ventajas

1. **Principio Abierto/Cerrado**: Puedes agregar nuevos tipos de notificaciones sin modificar código existente
2. **Separación de responsabilidades**: La lógica de creación está separada del uso
3. **Flexibilidad**: Fácil intercambio de productos
4. **Mantenibilidad**: Código más organizado y fácil de mantener

### ❌ Desventajas

1. **Complejidad**: Puede hacer el código más complejo para casos simples
2. **Jerarquía de clases**: Requiere crear muchas subclases

### 🎯 Cuándo Usar

- Cuando no sabes de antemano los tipos exactos de objetos que necesitarás
- Cuando quieres proporcionar a los usuarios una forma de extender componentes internos
- Cuando quieres reutilizar objetos existentes en lugar de reconstruirlos

### 🔧 Ejecutar el Ejemplo

```bash
cd 01-factory-method/POO
npx ts-node index.ts
```

**Salida esperada:**
```
Sending email to alvaro@email.com: Hello, this is an email notification!
Sending push notification to device 12312312321: Hello, this is a push notification!
Sending SMS to 888333999: Hello, this is an SMS notification!
```
