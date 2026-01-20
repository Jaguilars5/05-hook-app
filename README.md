# 🎣 React Hooks - Prácticas

Colección completa de ejercicios y ejemplos prácticos sobre React Hooks, desde conceptos básicos hasta patrones avanzados de optimización.

> 🎓 **Curso**: React de Cero a Experto (Hooks y MERN) - [Fernando Herrera](https://fernando-herrera.com/) | [DevTalles](https://cursos.devtalles.com/)  
> 📖 [Ver información detallada del curso](CURSO.md)

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Prácticas Incluidas](#prácticas-incluidas)
- [Scripts Disponibles](#scripts-disponibles)
- [Testing](#testing)
- [Información del Curso](CURSO.md)

## 🚀 Descripción

Este proyecto contiene los ejercicios y prácticas realizados durante el curso de React de **Fernando Herrera**. Es una colección de ejemplos prácticos que demuestran el uso de diferentes React Hooks, desde conceptos básicos hasta patrones avanzados de optimización. Cada módulo se enfoca en un hook específico o concepto de React, proporcionando implementaciones reales y casos de uso.

> **Nota**: Este código es resultado de seguir el curso de React Hooks. Los ejercicios originales fueron creados por Fernando Herrera como material educativo.

## 🛠️ Tecnologías

- **React** 18.2.0 - Librería principal
- **React Router DOM** 6.22.0 - Navegación entre prácticas
- **Vite** - Build tool y dev server
- **Jest** - Framework de testing
- **React Testing Library** - Testing de componentes

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Jaguilars5/05-hoock-app.git

# Entrar al directorio
cd 05-hoock-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── 01-useState/              # Estado básico y custom hooks
├── 02-useEffect/             # Efectos secundarios y ciclo de vida
├── 03-examples/              # Ejemplos con múltiples hooks
├── 04-useRef/                # Referencias al DOM
├── 05-useLayoutEffect/       # Layout effects
├── 06-memos/                 # Optimización con memoización
├── 07-tarea-memo/            # Ejercicio práctico de optimización
├── 08-useReducer/            # Gestión de estado complejo
├── 09-useContext/            # Contexto global
├── hooks/                    # Custom hooks reutilizables
│   ├── useCounter.js
│   ├── useFetch.js
│   ├── useForm.js
│   └── useTodo.js
├── components/               # Componentes compartidos
├── LandingPage.jsx           # Página principal
└── AppRouter.jsx             # Configuración de rutas
```

## 📚 Prácticas Incluidas

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

- **MultipleCustomHooks**: Integración con API de Rick & Morty
- **CharacterCard**: Tarjeta de personaje
- **Loading**: Estado de carga
- **Conceptos**: `useFetch`, loading states, composición de hooks

### 4️⃣ useRef

- **FocusScreen**: Manejo de focus en inputs
- **Conceptos**: Referencias al DOM, manipulación directa

### 5️⃣ useLayoutEffect

- **Layout**: Mediciones y efectos de layout
- **Conceptos**: Layout measurements, diferencia con useEffect

### 6️⃣ Memos y Optimización

- **Memorize**: React.memo para prevenir re-renders
- **MemoHook**: useMemo para cálculos costosos
- **CallbackHook**: useCallback para funciones estables
- **Conceptos**: Optimización, memoización, performance

### 7️⃣ Tarea Memo

- **Padre-Hijo**: Ejercicio de optimización
- **Conceptos**: Props estables, React.memo, useCallback

### 8️⃣ useReducer

- **TodoApp**: Aplicación completa de TODOs
- **TodoItem, TodoList, TodoAdd**: Componentes modulares
- **todoReducer**: Lógica de estado con reducer
- **Conceptos**: Estado complejo, reducers, actions

### 9️⃣ useContext

- **MainApp**: App con contexto global
- **UserContext, UserProvider**: Contexto de usuario
- **Navbar, HomePage, AboutPage, LoginPage**: Navegación
- **Conceptos**: Context API, estado global, React Router

## 🎯 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Build
npm run build        # Crear build de producción
npm run preview      # Preview del build

# Testing
npm run test         # Ejecutar tests en modo watch

# Linting
npm run lint         # Verificar código con ESLint
```

## 🧪 Testing

El proyecto incluye tests para custom hooks usando Jest y React Testing Library:

```bash
# Ejecutar todos los tests
npm run test

# Tests incluidos:
# - useCounter.test.js
# - useForm.test.js
```

### Ejemplo de test:

```javascript
import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

test("debe incrementar el contador", () => {
  const { result } = renderHook(() => useCounter());
  result.current.increment();
  expect(result.current.counter).toBe(1);
});
```

## 🎨 Características

- ✅ Navegación intuitiva con landing page
- ✅ Ejemplos prácticos de cada hook
- ✅ Custom hooks reutilizables
- ✅ Tests unitarios
- ✅ Código limpio y comentado
- ✅ Responsive design
- ✅ Optimización de performance

## 📖 Recursos de Aprendizaje

- [Documentación oficial de React](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [React Router](https://reactrouter.com)
- [Testing Library](https://testing-library.com/react)

## 👨‍💻 Autor y Créditos

**Estudiante**: Jaguilars5

**Instructor del Curso**: [Fernando Herrera](https://fernando-herrera.com/)

- 🎓 Curso: React de Cero a Experto (Hooks y MERN)
- 🔗 [DevTalles](https://cursos.devtalles.com/)

## 📄 Licencia

Los ejercicios originales son propiedad intelectual de Fernando Herrera y DevTalles. Este repositorio contiene mi implementación personal de dichos ejercicios con fines educativos.

## 🙏 Agradecimientos

Gracias a **Fernando Herrera** por crear un excelente curso que me permitió aprender y dominar React Hooks.

---

⭐ Si este proyecto te ayudó a aprender React Hooks, considera darle una estrella en GitHub!
