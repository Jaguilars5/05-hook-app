# 🎣 React Hooks - Practice & Examples

A comprehensive collection of React Hooks exercises and practical examples, from basic concepts to advanced optimization patterns.

> 🎓 **Course**: React de Cero a Experto (Hooks y MERN) - [Fernando Herrera](https://fernando-herrera.com/) | [DevTalles](https://cursos.devtalles.com/)  
> 📖 [Ver documentación en Español](./docs/README_ES.md) | 📚 [Course Information](./docs/COURSE.md)

## 📋 Table of Contents

- [📚 Additional Documentation](#-additional-documentation)
- [🚀 Description](#-description)
- [🛠️ Technologies](#️-technologies)
- [📦 Installation](#-installation)
- [📁 Project Structure](#-project-structure)
- [📚 Practices Included](#-practices-included)
- [🎯 Available Scripts](#-available-scripts)
- [🧪 Testing](#-testing)
- [👨‍💻 Author & Credits](#-author--credits)

## 📚 Additional Documentation

- 🎓 **[Course Information](./docs/COURSE.md)** - Detailed course information in English
- 🎓 **[Información del Curso](./docs/CURSO.md)** - Información detallada del curso en Español
- 📘 **[User Guide](./docs/USER_GUIDE.md)** - Complete usage guide in English
- 📘 **[Guía de Uso](./docs/GUIA_USO.md)** - Guía de uso completa en Español
- 🗂️ **[Project Structure](./docs/PROJECT_STRUCTURE.md)** - Detailed project structure in English
- 🗂️ **[Estructura del Proyecto](./docs/ESTRUCTURA.md)** - Estructura detallada en Español
- 🌐 **[Documentación Completa en Español](./docs/README_ES.md)** - Full documentation in Spanish

## 🚀 Description

This project contains exercises and practices from **Fernando Herrera's** React course. It's a collection of practical examples demonstrating the use of different React Hooks, from basic concepts to advanced optimization patterns. Each module focuses on a specific hook or React concept, providing real implementations and use cases.

> **Note**: This code is the result of following the React Hooks course. The original exercises were created by Fernando Herrera as educational material.

## 🛠️ Technologies

- **React** 18.2.0 - Main library
- **React Router DOM** 6.22.0 - Navigation between practices
- **Vite** 5.0.12 - Build tool and dev server
- **Jest** 29.7.0 - Testing framework
- **React Testing Library** 14.2.1 - Component testing
- **Babel** 7.23.9 - JavaScript compiler

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Jaguilars5/05-hoock-app.git

# Enter the directory
cd 05-hoock-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── 01-useState/              # Basic state and custom hooks
├── 02-useEffect/             # Side effects and lifecycle
├── 03-examples/              # Examples with multiple hooks
├── 04-useRef/                # DOM references
├── 05-useLayoutEffect/       # Layout effects
├── 06-memos/                 # Optimization with memoization
├── 07-tarea-memo/            # Optimization practical exercise
├── 08-useReducer/            # Complex state management
├── 09-useContext/            # Global context
├── hooks/                    # Reusable custom hooks
│   ├── useCounter.js
│   ├── useFetch.js
│   ├── useForm.js
│   └── useTodo.js
├── components/               # Shared components
├── LandingPage.jsx           # Main page
└── AppRouter.jsx             # Route configuration
```

For a complete directory tree, see [Project Structure](./docs/PROJECT_STRUCTURE.md).

## 📚 Practices Included

### 1️⃣ useState

- **CounterApp**: Contador básico con estado
- **CounterWithCustomHook**: Contador usando custom hook `useCounter`
- **Conceptos**: Estado local, actualización de estado, custom hooks

### 2️⃣ useEffect

- **SimpleForm**: Formulario con efectos
- **FormWithCustomHook**: Formulario optimizado con `useForm`
- **Message**: Componente con cleanup
- **Conceptos**: Side effects, ciclo de vida, cleanup

### 3️⃣ Multiple Custom Hooks

- **MultipleCustomHooks**: Integration with Rick & Morty API
- **CharacterCard**: Character card
- **Loading**: Loading state
- **Concepts**: `useFetch`, loading states, hook composition

### 4️⃣ useRef

- **FocusScreen**: Input focus management
- **Concepts**: DOM references, direct manipulation

### 5️⃣ useLayoutEffect

- **Layout**: Measurements and layout effects
- **Concepts**: Layout measurements, difference with useEffect

### 6️⃣ Memos & Optimization

- **Memorize**: React.memo to prevent re-renders
- **MemoHook**: useMemo for expensive calculations
- **CallbackHook**: useCallback for stable functions
- **Concepts**: Optimization, memoization, performance

### 7️⃣ Memo Task

- **Padre-Hijo**: Optimization exercise
- **Concepts**: Stable props, React.memo, useCallback

### 8️⃣ useReducer

- **TodoApp**: Complete TODO application
- **TodoItem, TodoList, TodoAdd**: Modular components
- **todoReducer**: State logic with reducer
- **Concepts**: Complex state, reducers, actions

### 9️⃣ useContext

- **MainApp**: App with global context
- **UserContext, UserProvider**: User context
- **Navbar, HomePage, AboutPage, LoginPage**: Navigation
- **Concepts**: Context API, global state, React Router

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Create production build
npm run preview      # Preview the build

# Testing
npm run test         # Run tests in watch mode

# Linting
npm run lint         # Verify code with ESLint
```

## 🧪 Testing

The project includes tests for custom hooks using Jest and React Testing Library:

```bash
# Run all tests
npm run test

# Included tests:
# - useCounter.test.js
# - useForm.test.js
# - useFetch.test.js
# - useTodo.test.js
# - todoReducer.test.js
```

### Test Example:

```javascript
import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

test("should increment the counter", () => {
  const { result } = renderHook(() => useCounter());
  result.current.increment();
  expect(result.current.counter).toBe(1);
});
```

## 🎨 Features

- ✅ Intuitive navigation with landing page
- ✅ Practical examples of each hook
- ✅ Reusable custom hooks
- ✅ Unit tests
- ✅ Clean and commented code
- ✅ Responsive design
- ✅ Performance optimization

## 📖 Learning Resources

- [Official React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [React Router](https://reactrouter.com)
- [Testing Library](https://testing-library.com/react)

## 👨‍💻 Author & Credits

**Student**: Jefferson Aguilar

**Course Instructor**: [Fernando Herrera](https://fernando-herrera.com/)

- 🎓 Course: React de Cero a Experto (Hooks y MERN)
- 🔗 [DevTalles](https://cursos.devtalles.com/)

## 📄 License

The original exercises are intellectual property of Fernando Herrera and DevTalles. This repository contains my personal implementation of these exercises for educational purposes.

## 🙏 Acknowledgments

Thanks to **Fernando Herrera** for creating an excellent course that allowed me to learn and master React Hooks.

---

⭐ If this project helped you learn React Hooks, consider giving it a star on GitHub!

**Last updated**: January 2026
