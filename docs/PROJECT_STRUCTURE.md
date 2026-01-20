# 🗂️ Project Structure

> 🎓 **Educational Project**  
> Course exercises by **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

[📖 Ver en español](./ESTRUCTURA.md)

---

## 📊 Complete Directory Tree

```
05-hoock-app/
│
├── 📄 README.md                    # Main documentation (English)
├── 📄 SCREENSHOTS.md               # Screenshots
│
├── 📦 package.json                 # Dependencies and scripts
├── 📦 vite.config.js               # Vite configuration
├── 📦 babel.config.cjs             # Babel configuration
├── 📦 jest.config.cjs              # Jest configuration
├── 📦 jest.setup.cjs               # Jest setup
├── 📦 .eslintrc.cjs                # ESLint configuration
│
├── 📄 index.html                   # Main HTML
│
├── 📁 docs/                        # Additional documentation
│   ├── README_ES.md                # Spanish documentation
│   ├── GUIA_USO.md                 # User guide (ES)
│   ├── USER_GUIDE.md               # User guide (EN)
│   ├── ESTRUCTURA.md               # This file (ES)
│   ├── PROJECT_STRUCTURE.md        # This file (EN)
│   ├── CURSO.md                    # Course info (ES)
│   └── COURSE.md                   # Course info (EN)
│
├── 📁 public/                      # Static public files
│   └── screenshots/                # Application screenshots
│
├── 📁 src/                         # Source code
│   │
│   ├── 📄 main.jsx                 # ⭐ Entry point
│   ├── 📄 index.css                # Global styles
│   ├── 📄 Hook-App.jsx             # App component (legacy)
│   ├── 📄 Hoock-App.jsx            # App component (legacy)
│   │
│   ├── 📄 LandingPage.jsx          # ⭐ Main page
│   ├── 📄 landing.css              # Landing styles
│   ├── 📄 practices.css            # Practice styles
│   ├── 📄 AppRouter.jsx            # ⭐ Route configuration
│   │
│   ├── 📁 components/              # ⭐ Shared components
│   │   ├── BackButton.jsx
│   │   ├── BackButton.css
│   │   └── PracticeLayout.jsx
│   │
│   ├── 📁 hooks/                   # 🎣 Custom Hooks
│   │   ├── index.js
│   │   ├── useCounter.js           # Counter hook
│   │   ├── useFetch.js             # HTTP hook
│   │   ├── useForm.js              # Form hook
│   │   └── useTodo.js              # TODO hook
│   │
│   ├── 📁 01-useState/             # 🔢 Practice 1
│   │   ├── CounterApp.jsx
│   │   └── CounterWithCustomHook.jsx
│   │
│   ├── 📁 02-useEffect/            # ⚡ Practice 2
│   │   ├── SimpleForm.jsx
│   │   ├── FormWithCustomHook.jsx
│   │   ├── FromWithCustomHoock.jsx
│   │   └── Message.jsx
│   │
│   ├── 📁 03-examples/             # 🚀 Practice 3
│   │   ├── MultipleCustomHooks.jsx
│   │   ├── MultipleCustomHoocks.jsx
│   │   └── Components/
│   │       ├── CharacterCard.jsx
│   │       ├── Loading.jsx
│   │       └── index.js
│   │
│   ├── 📁 04-useRef/               # 🎯 Practice 4
│   │   └── FocusScreen.jsx
│   │
│   ├── 📁 05-useLayoutEffect/      # 📐 Practice 5
│   │   └── Layout.jsx
│   │
│   ├── 📁 06-memos/                # ⚡ Practice 6
│   │   ├── Memorize.jsx
│   │   ├── MemoHook.jsx
│   │   ├── MemoHoock.jsx
│   │   ├── CallbackHook.jsx
│   │   ├── CallbackHoock.jsx
│   │   └── components/
│   │       ├── Small.jsx
│   │       └── ShowIncrement.jsx
│   │
│   ├── 📁 07-tarea-memo/           # 📝 Practice 7
│   │   ├── Padre.jsx
│   │   └── Hijo.jsx
│   │
│   ├── 📁 08-useReducer/           # 📋 Practice 8
│   │   ├── TodoApp.jsx
│   │   ├── intro-reducer.js
│   │   └── components/
│   │       ├── index.js
│   │       ├── TodoAdd.jsx
│   │       ├── TodoItem.jsx
│   │       ├── TodoList.jsx
│   │       └── todoReducer.js
│   │
│   └── 📁 09-useContext/           # 🌐 Practice 9
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

## 🎯 Key Files

### Main Files

| File              | Description                              |
| ----------------- | ---------------------------------------- |
| `main.jsx`        | Entry point, mounts the application      |
| `LandingPage.jsx` | Main page with all practices             |
| `AppRouter.jsx`   | Application route configuration          |
| `index.css`       | Global styles                            |

### Shared Components

| File                 | Description                |
| -------------------- | -------------------------- |
| `BackButton.jsx`     | Button to return to home   |
| `PracticeLayout.jsx` | Layout wrapper for practices |

### Custom Hooks

| Hook         | Description           |
| ------------ | --------------------- |
| `useCounter` | Counter management    |
| `useFetch`   | HTTP requests         |
| `useForm`    | Form handling         |
| `useTodo`    | TODO management       |

---

## 📋 Application Flow

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
│ LandingPage │ ──► Practice Cards
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│ Individual Practice │ ──► Hook Components
└─────────────────────┘
```

### Startup Flow

1. **index.html** loads `main.jsx`
2. **main.jsx** renders the application with React Router
3. **AppRouter** defines routes:
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
4. **Each practice** uses custom hooks and displays specific examples

---

## 🏗️ Architecture Patterns

### 1. Modular by Features

Each practice is in its own folder with all necessary components.

### 2. Custom Hooks for Logic Reuse

Logic separated from UI in reusable hooks.

### 3. Shared Components

Common components like `BackButton` and `PracticeLayout`.

### 4. Centralized Routing

All routes defined in `AppRouter.jsx`.

### 5. Presentational and Container Components

- **Presentational**: Pure UI components
- **Containers**: Pages that use hooks

---

## 🎨 Code Conventions

### Naming

- **Components**: PascalCase (`CounterApp.jsx`)
- **Hooks**: camelCase with 'use' prefix (`useCounter.js`)
- **Functions**: camelCase (`handleIncrement`)
- **Constants**: camelCase or UPPER_SNAKE_CASE
- **CSS**: kebab-case

### Component Structure

```jsx
// 1. Imports
import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

// 2. Component
export const MyComponent = () => {
  // 3. Custom hooks
  const { counter, increment } = useCounter();
  
  // 4. State hooks
  const [state, setState] = useState();
  
  // 5. Handler functions
  const handleClick = () => {};
  
  // 6. Return/JSX
  return (
    <div>
      {/* content */}
    </div>
  );
};
```

---

## 🔄 Hook Patterns

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
    // fetch logic
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

## 📊 Dependencies by Module

### useState (01)
- React core

### useEffect (02)
- React core
- `useForm` hook

### Examples (03)
- React core
- `useFetch` hook
- Rick & Morty API

### useRef (04)
- React core

### useLayoutEffect (05)
- React core
- `useFetch` hook

### Memos (06)
- React core
- `useCounter` hook

### Tarea Memo (07)
- React core
- React.memo
- useCallback

### useReducer (08)
- React core
- `useTodo` hook
- localStorage

### useContext (09)
- React core
- React Router DOM
- useContext

---

## 🚀 Entry Points

### Development

```bash
npm run dev
# Starts Vite dev server at http://localhost:5173
```

### Testing

```bash
npm run test
# Runs Jest in watch mode
```

### Build

```bash
npm run build
# Creates optimized production build in /dist
```

---

## 🔐 Security

### Best Practices

- ✅ No hardcoded credentials
- ✅ Proper dependency management in useEffect
- ✅ Input validation in forms
- ✅ Error handling in HTTP requests
- ✅ localStorage security considerations

---

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [React Router](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev/guide/)
- [Jest Documentation](https://jestjs.io)

---

**Last updated**: January 2026

⭐ For more information, check the [main README](../README.md)
