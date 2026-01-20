# 🗂️ Estructura del Proyecto

> 🎓 **Proyecto Educativo**  
> Ejercicios y prácticas del curso de React de **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

[📖 View in English](./PROJECT_STRUCTURE.md)

---

## 📊 Árbol de Directorios Completo

```
05-hoock-app/
│
├── 📄 README.md                    # Documentación principal (English)
├── 📄 SCREENSHOTS.md               # Capturas de pantalla
│
├── 📦 package.json                 # Dependencias y scripts
├── 📦 vite.config.js               # Configuración de Vite
├── 📦 babel.config.cjs             # Configuración de Babel
├── 📦 jest.config.cjs              # Configuración de Jest
├── 📦 jest.setup.cjs               # Setup de Jest
├── 📦 .eslintrc.cjs                # Configuración de ESLint
│
├── 📄 index.html                   # HTML principal
│
├── 📁 docs/                        # Documentación adicional
│   ├── README_ES.md                # Documentación en español
│   ├── GUIA_USO.md                 # Guía de uso detallada (ES)
│   ├── USER_GUIDE.md               # Guía de uso (EN)
│   ├── ESTRUCTURA.md               # Este archivo (ES)
│   ├── PROJECT_STRUCTURE.md        # Estructura del proyecto (EN)
│   ├── CURSO.md                    # Info del curso (ES)
│   └── COURSE.md                   # Info del curso (EN)
│
├── 📁 public/                      # Archivos públicos estáticos
│   └── screenshots/                # Capturas de la aplicación
│
├── 📁 src/                         # Código fuente
│   │
│   ├── 📄 main.jsx                 # Punto de entrada
│   ├── 📄 index.css                # Estilos globales
│   ├── 📄 Hook-App.jsx             # Componente App (legacy)
│   ├── 📄 Hoock-App.jsx            # Componente App (legacy)
│   │
│   ├── 📄 LandingPage.jsx          # ⭐ Página principal
│   ├── 📄 landing.css              # Estilos del landing
│   ├── 📄 practices.css            # Estilos de prácticas
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
│   │   ├── FromWithCustomHoock.jsx
│   │   └── Message.jsx
│   │
│   ├── 📁 03-examples/             # 🚀 Práctica 3
│   │   ├── MultipleCustomHooks.jsx
│   │   ├── MultipleCustomHoocks.jsx
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
│   │   ├── MemoHoock.jsx
│   │   ├── CallbackHook.jsx
│   │   ├── CallbackHoock.jsx
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
        ├── useForm.test.js
        ├── useFetch.test.js
        ├── useTodo.test.js
        └── todoReducer.test.js
```

---

---

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

---

## 📋 Flujo de la Aplicación

### Flujo de Inicio

1. **index.html** carga `main.jsx`
2. **main.jsx** renderiza la aplicación con React Router
3. **AppRouter** define las rutas:
   - `/` → LandingPage
   - `/useState` → CounterWithCustomHook
   - `/useEffect` → FormWithCustomHook
   - `/examples` → MultipleCustomHooks
   - `/useRef` → FocusScreen
   - `/useLayoutEffect` → Layout
   - `/memos` → Memorize
   - `/memo-hook` → MemoHook
   - `/callback-hook` → CallbackHook
   - `/tarea-memo` → Padre
   - `/useReducer` → TodoApp
   - `/useContext` → MainApp
4. **Cada práctica** usa custom hooks y muestra ejemplos específicos

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
       ▼
┌─────────────┐
│ LandingPage │ ──► Tarjetas de Prácticas
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│ Práctica Individual │ ──► Componentes de Hook
└─────────────────────┘
```

---

## 🏗️ Patrones de Arquitectura

### 1. Modular por Features

Cada práctica está en su propia carpeta con todos los componentes necesarios.

### 2. Custom Hooks para Lógica Reutilizable

Lógica separada de la UI en hooks reutilizables.

### 3. Componentes Compartidos

Componentes comunes como `BackButton` y `PracticeLayout`.

### 4. Enrutamiento Centralizado

Todas las rutas definidas en `AppRouter.jsx`.

### 5. Componentes Presentacionales y Contenedores

- **Presentacionales**: Componentes de UI pura
- **Contenedores**: Pages que usan hooks

---

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
- **Funciones**: camelCase (`handleIncrement`)
- **Constantes**: camelCase o UPPER_SNAKE_CASE
- **CSS**: kebab-case (`landing.css`)

### Estructura de Componentes

```jsx
// 1. Imports
import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

// 2. Componente
export const MyComponent = () => {
  // 3. Custom hooks
  const { counter, increment } = useCounter();
  
  // 4. State hooks
  const [state, setState] = useState();
  
  // 5. Funciones manejadoras
  const handleClick = () => {};
  
  // 6. Return/JSX
  return (
    <div>
      {/* contenido */}
    </div>
  );
};
```

---

## 🔄 Patrones de Hooks

### useCounter

```javascript
export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);
  
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  
  const decrement = (value = 1) => {
    setCounter(counter - value);
  };
  
  const reset = () => {
    setCounter(initialValue);
  };
  
  return {
    counter,
    increment,
    decrement,
    reset
  };
};
```

### useFetch

```javascript
export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  });
  
  useEffect(() => {
    getFetch();
  }, [url]);
  
  const getFetch = async () => {
    // lógica de fetch
  };
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
};
```

### useForm

```javascript
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const onResetForm = () => {
    setFormState(initialForm);
  };
  
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};
```

---

## 📊 Dependencias por Módulo

### useState (01)
- React core

### useEffect (02)
- React core
- Hook `useForm`

### Examples (03)
- React core
- Hook `useFetch`
- API de Rick & Morty

### useRef (04)
- React core

### useLayoutEffect (05)
- React core
- Hook `useFetch`

### Memos (06)
- React core
- Hook `useCounter`

### Tarea Memo (07)
- React core
- React.memo
- useCallback

### useReducer (08)
- React core
- Hook `useTodo`
- localStorage

### useContext (09)
- React core
- React Router DOM
- useContext

---

## 🚀 Puntos de Entrada

### Desarrollo

```bash
npm run dev
# Inicia servidor de Vite en http://localhost:5173
```

### Testing

```bash
npm run test
# Ejecuta Jest en modo watch
```

### Build

```bash
npm run build
# Crea build optimizado de producción en /dist
```

---

## 🔐 Seguridad

### Mejores Prácticas

- ✅ Sin credenciales hardcodeadas
- ✅ Gestión correcta de dependencias en useEffect
- ✅ Validación de inputs en formularios
- ✅ Manejo de errores en peticiones HTTP
- ✅ Consideraciones de seguridad en localStorage

---

## 📖 Recursos Adicionales

- [Documentación de React](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [React Router](https://reactrouter.com)
- [Guía de Vite](https://vitejs.dev/guide/)
- [Documentación de Jest](https://jestjs.io)

---

**Última actualización**: Enero 2026

⭐ Para más información, consulta el [README principal](../README.md)

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
