# 📘 Guía de Uso - React Hooks App

> 🎓 **Ejercicios del curso de React de Fernando Herrera**  
> Estas prácticas forman parte del curso "React de Cero a Experto (Hooks y MERN)" de [DevTalles](https://cursos.devtalles.com/)

## 🚀 Inicio Rápido

### 1. Instalación

```bash
npm install
```

### 2. Ejecutar la aplicación

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

## 🎯 Navegación

### Landing Page

Al iniciar la aplicación, verás una página principal con tarjetas de todas las prácticas disponibles:

- **useState**: Prácticas de estado local
- **useEffect**: Efectos secundarios y ciclo de vida
- **Ejemplos Múltiples**: Integración de hooks con API
- **useRef**: Referencias al DOM
- **useLayoutEffect**: Layout effects
- **Memos**: Optimización con memoización
- **Tarea Memo**: Ejercicio práctico
- **useReducer**: Gestión de estado complejo
- **useContext**: Contexto global

### Botón de Volver

Cada práctica tiene un botón **"← Volver al inicio"** en la esquina superior izquierda para regresar a la landing page.

## 📚 Orden de Estudio Recomendado

1. **useState** - Conceptos básicos de estado
2. **useEffect** - Efectos y ciclo de vida
3. **Ejemplos Múltiples** - Composición de hooks
4. **useRef** - Referencias DOM
5. **useLayoutEffect** - Efectos de layout
6. **Memos** - Optimización básica
7. **Tarea Memo** - Práctica de optimización
8. **useReducer** - Estado complejo
9. **useContext** - Estado global

## 🧪 Testing

### Ejecutar tests

```bash
npm run test
```

### Tests disponibles

- `useCounter.test.js` - Tests del hook useCounter
- `useForm.test.js` - Tests del hook useForm

## 🎨 Características de cada Práctica

### 01-useState

- **CounterApp**: Contador con múltiples estados
- **CounterWithCustomHook**: Uso del custom hook `useCounter`

**Conceptos clave**: Estado local, actualización de estado

### 02-useEffect

- **SimpleForm**: Formulario básico con efectos
- **FormWithCustomHook**: Formulario con `useForm`
- **Message**: Componente con cleanup

**Conceptos clave**: Side effects, cleanup, dependencias

### 03-Examples

- **MultipleCustomHooks**: Peticiones a API de Rick & Morty
- Uso de `useFetch` para obtener datos
- Estados de loading y error

**Conceptos clave**: Composición de hooks, manejo de peticiones HTTP

### 04-useRef

- **FocusScreen**: Manejo de focus en inputs
- Acceso directo al DOM

**Conceptos clave**: Referencias, manipulación DOM

### 05-useLayoutEffect

- **Layout**: Navegación con mediciones
- Diferencia entre useEffect y useLayoutEffect

**Conceptos clave**: Layout measurements, timing

### 06-Memos

- **Memorize**: Prevención de re-renders con React.memo
- **MemoHook**: Optimización de cálculos con useMemo
- **CallbackHook**: Estabilidad de funciones con useCallback

**Conceptos clave**: Optimización, performance, memoización

### 07-Tarea-Memo

- **Padre-Hijo**: Ejercicio de optimización
- Aplicación de React.memo y useCallback

**Conceptos clave**: Props estables, prevención de renders

### 08-useReducer

- **TodoApp**: Aplicación completa de TODOs
- CRUD de tareas
- Estado manejado con reducer

**Conceptos clave**: Reducers, actions, estado complejo

### 09-useContext

- **MainApp**: Aplicación con contexto global
- Autenticación simple
- Navegación con React Router
- **Páginas**: Home, About, Login

**Conceptos clave**: Context API, estado compartido, routing

## 🔧 Custom Hooks Disponibles

### `useCounter(initialValue)`

Hook para manejar contadores con incremento, decremento y reset.

```javascript
const { counter, increment, decrement, reset } = useCounter(10);
```

### `useFetch(url)`

Hook para realizar peticiones HTTP.

```javascript
const { data, isLoading, hasError } = useFetch("https://api.example.com/data");
```

### `useForm(initialForm)`

Hook para manejar formularios.

```javascript
const { formState, onInputChange, onResetForm } = useForm({
  name: "",
  email: "",
});
```

### `useTodo()`

Hook para manejar lista de TODOs.

```javascript
const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();
```

## 📁 Estructura de Archivos

```
src/
├── LandingPage.jsx        # Página principal
├── AppRouter.jsx          # Configuración de rutas
├── landing.css            # Estilos de landing
├── components/            # Componentes compartidos
│   ├── BackButton.jsx
│   └── PracticeLayout.jsx
├── hooks/                 # Custom hooks
│   ├── useCounter.js
│   ├── useFetch.js
│   ├── useForm.js
│   └── useTodo.js
└── [01-09]-*/            # Carpetas de prácticas
```

## 💡 Tips

1. **Navega libremente**: Usa el landing page para explorar las diferentes prácticas
2. **Revisa el código**: Cada componente está documentado con comentarios
3. **Experimenta**: Modifica los valores y observa los cambios
4. **Aprende progresivamente**: Sigue el orden recomendado para mejor comprensión
5. **Ejecuta los tests**: Aprende cómo testear custom hooks

## 🐛 Troubleshooting

### Error: Module not found

```bash
npm install
```

### Puerto 5173 ocupado

Vite usará automáticamente el siguiente puerto disponible

### Problemas de hot reload

```bash
# Detener el servidor (Ctrl+C)
npm run dev
```

## 📖 Recursos Adicionales

- [Documentación de React](https://react.dev)
- [Hooks API Reference](https://react.dev/reference/react)
- [React Router Docs](https://reactrouter.com)

---

¿Tienes preguntas? Revisa el código de cada práctica para ver ejemplos concretos.
