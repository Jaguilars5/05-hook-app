# 🗂️ Estructura del Proyecto

> 🎓 **Proyecto Educativo**  
> Ejercicios y prácticas del curso de React de **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

## 📊 Árbol de Directorios Completo

```
05-hoock-app/
│
├── 📄 README.md                    # Documentación principal
├── 📄 GUIA_USO.md                  # Guía de uso detallada
├── 📄 SCREENSHOTS.md               # Capturas de pantalla
├── 📄 ESTRUCTURA.md                # Este archivo
│
├── 📦 package.json                 # Dependencias y scripts
├── 📦 vite.config.js               # Configuración de Vite
├── 📦 babel.config.cjs             # Configuración de Babel
├── 📦 jest.config.cjs              # Configuración de Jest
├── 📦 jest.setup.cjs               # Setup de Jest
│
├── 📄 index.html                   # HTML principal
│
├── 📁 public/                      # Archivos públicos estáticos
│
├── 📁 src/                         # Código fuente
│   │
│   ├── 📄 main.jsx                 # Punto de entrada
│   ├── 📄 index.css                # Estilos globales
│   ├── 📄 Hook-App.jsx             # Componente App (legacy)
│   │
│   ├── 📄 LandingPage.jsx          # ⭐ Página principal
│   ├── 📄 landing.css              # Estilos del landing
│   ├── 📄 AppRouter.jsx            # ⭐ Configuración de rutas
│   │
│   ├── 📁 components/              # ⭐ Componentes compartidos
│   │   ├── BackButton.jsx
│   │   ├── BackButton.css
│   │   └── PracticeLayout.jsx
│   │
│   ├── 📁 hooks/                   # 🎣 Custom Hooks
│   │   ├── index.js
│   │   ├── useCounter.js           # Hook de contador
│   │   ├── useFetch.js             # Hook para HTTP
│   │   ├── useForm.js              # Hook de formularios
│   │   └── useTodo.js              # Hook de TODOs
│   │
│   ├── 📁 01-useState/             # 🔢 Práctica 1
│   │   ├── CounterApp.jsx
│   │   └── CounterWithCustomHook.jsx
│   │
│   ├── 📁 02-useEffect/            # ⚡ Práctica 2
│   │   ├── SimpleForm.jsx
│   │   ├── FormWithCustomHook.jsx
│   │   └── Message.jsx
│   │
│   ├── 📁 03-examples/             # 🚀 Práctica 3
│   │   ├── MultipleCustomHooks.jsx
│   │   └── Components/
│   │       ├── CharacterCard.jsx
│   │       ├── Loading.jsx
│   │       └── index.js
│   │
│   ├── 📁 04-useRef/               # 🎯 Práctica 4
│   │   └── FocusScreen.jsx
│   │
│   ├── 📁 05-useLayoutEffect/      # 📐 Práctica 5
│   │   └── Layout.jsx
│   │
│   ├── 📁 06-memos/                # ⚡ Práctica 6
│   │   ├── Memorize.jsx
│   │   ├── MemoHook.jsx
│   │   ├── CallbackHook.jsx
│   │   └── components/
│   │       ├── Small.jsx
│   │       └── ShowIncrement.jsx
│   │
│   ├── 📁 07-tarea-memo/           # 📝 Práctica 7
│   │   ├── Padre.jsx
│   │   └── Hijo.jsx
│   │
│   ├── 📁 08-useReducer/           # 📋 Práctica 8
│   │   ├── TodoApp.jsx
│   │   ├── intro-reducer.js
│   │   └── components/
│   │       ├── index.js
│   │       ├── TodoAdd.jsx
│   │       ├── TodoItem.jsx
│   │       ├── TodoList.jsx
│   │       └── todoReducer.js
│   │
│   └── 📁 09-useContext/           # 🌐 Práctica 9
│       ├── MainApp.jsx
│       ├── Navbar.jsx
│       ├── HomePage.jsx
│       ├── AboutPage.jsx
│       ├── LoginPage.jsx
│       └── context/
│           ├── UserContext.jsx
│           └── UserProvider.jsx
│
└── 📁 test/                        # 🧪 Tests
    └── hooks/
        ├── useCounter.test.js
        └── useForm.test.js
```

## 🎯 Archivos Clave

### Archivos Principales

| Archivo           | Descripción                              |
| ----------------- | ---------------------------------------- |
| `main.jsx`        | Punto de entrada, monta la aplicación    |
| `LandingPage.jsx` | Página principal con todas las prácticas |
| `AppRouter.jsx`   | Configuración de rutas de la aplicación  |
| `index.css`       | Estilos globales                         |

### Componentes Compartidos

| Archivo              | Descripción                   |
| -------------------- | ----------------------------- |
| `BackButton.jsx`     | Botón para volver al inicio   |
| `PracticeLayout.jsx` | Layout wrapper para prácticas |

### Custom Hooks

| Hook         | Descripción           |
| ------------ | --------------------- |
| `useCounter` | Manejo de contadores  |
| `useFetch`   | Peticiones HTTP       |
| `useForm`    | Manejo de formularios |
| `useTodo`    | Gestión de TODOs      |

## 📋 Flujo de la Aplicación

```
┌─────────────┐
│  index.html │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  main.jsx   │ ──► BrowserRouter
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ AppRouter   │ ──► Routes
└──────┬──────┘
       │
       ├──► / ──────────────► LandingPage
       │
       ├──► /usestate ──────► CounterApp
       ├──► /useeffect ─────► SimpleForm
       ├──► /examples ──────► MultipleCustomHooks
       ├──► /useref ────────► FocusScreen
       ├──► /uselayouteffect► Layout
       ├──► /memos ─────────► Memorize
       ├──► /tarea-memo ────► Padre
       ├──► /usereducer ────► TodoApp
       └──► /usecontext/* ──► MainApp
                                  │
                                  ├─► / ────► HomePage
                                  ├─► /about ► AboutPage
                                  └─► /login ► LoginPage
```

## 🏗️ Patrones de Arquitectura

### 1. Organización por Features

Cada práctica está en su propia carpeta con sus componentes relacionados.

### 2. Custom Hooks Centralizados

Todos los hooks reutilizables en la carpeta `hooks/`.

### 3. Componentes Compartidos

Componentes usados en múltiples lugares en `components/`.

### 4. Separación de Concerns

- **Presentación**: Componentes JSX
- **Lógica**: Custom Hooks
- **Estado**: Context, useState, useReducer
- **Estilos**: CSS separados

## 🎨 Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (`LandingPage.jsx`)
- **Hooks**: camelCase con prefijo 'use' (`useCounter.js`)
- **CSS**: kebab-case (`landing.css`)
- **Constantes**: UPPER_SNAKE_CASE

### Estructura de Componentes

```jsx
// 1. Imports
import { useState } from "react";
import { CustomHook } from "./hooks";

// 2. Componente
export const MyComponent = () => {
  // 3. Hooks
  const [state, setState] = useState();

  // 4. Funciones
  const handleClick = () => {};

  // 5. Return/JSX
  return <div>{/* contenido */}</div>;
};
```

## 🔄 Flujo de Datos

### Landing → Práctica

```
Usuario hace click en tarjeta
    ↓
React Router navega a la ruta
    ↓
AppRouter renderiza el componente
    ↓
PracticeLayout envuelve la práctica
    ↓
Se muestra el componente con BackButton
```

### Práctica → Landing

```
Usuario hace click en BackButton
    ↓
navigate('/') se ejecuta
    ↓
React Router navega a '/'
    ↓
LandingPage se renderiza
```

## 📊 Dependencias por Práctica

| Práctica           | Hooks Usados                  | Librerías        |
| ------------------ | ----------------------------- | ---------------- |
| 01-useState        | useState, useCounter          | -                |
| 02-useEffect       | useEffect, useForm            | -                |
| 03-examples        | useFetch, useState, useEffect | fetch API        |
| 04-useRef          | useRef                        | -                |
| 05-useLayoutEffect | useLayoutEffect, useState     | -                |
| 06-memos           | useMemo, memo, useCallback    | -                |
| 07-tarea-memo      | memo, useCallback, useState   | -                |
| 08-useReducer      | useReducer, useEffect         | localStorage     |
| 09-useContext      | useContext, useState          | react-router-dom |

## 🚀 Puntos de Entrada

### Desarrollo

- **Archivo**: `main.jsx`
- **Puerto**: 5173 (por defecto)
- **Hot Reload**: ✅ Habilitado

### Producción

- **Build**: `npm run build`
- **Output**: `dist/`
- **Preview**: `npm run preview`

### Testing

- **Runner**: Jest
- **Framework**: React Testing Library
- **Archivos**: `*.test.js`

---

**Última actualización**: Enero 2026
