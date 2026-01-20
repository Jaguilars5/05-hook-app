# 📘 User Guide - React Hooks App

> 🎓 **Educational Project**  
> These practices are part of the React course by **Fernando Herrera** - [DevTalles](https://cursos.devtalles.com/)

[📖 Ver en español](./GUIA_USO.md)

---

## 🚀 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Run the Application

```bash
npm run dev
```

The application will open at `http://localhost:5173`

---

## 🎯 Navigation

### Landing Page

When you start the application, you'll see a main page with cards for all available practices:

- **useState**: Local state practices
- **useEffect**: Side effects and lifecycle
- **Multiple Examples**: Hook integration with API
- **useRef**: DOM references
- **useLayoutEffect**: Layout effects
- **Memos**: Optimization with memoization
- **Memo Task**: Practical exercise
- **useReducer**: Complex state management
- **useContext**: Global context

### Back Button

Each practice has a **"← Back to home"** button in the upper left corner to return to the landing page.

---

## 📚 Recommended Study Order

1. **useState** - Basic state concepts
2. **useEffect** - Effects and lifecycle
3. **Multiple Examples** - Hook composition
4. **useRef** - DOM references
5. **useLayoutEffect** - Layout effects
6. **Memos** - Basic optimization
7. **Memo Task** - Optimization practice
8. **useReducer** - Complex state
9. **useContext** - Global state

---

## 🧪 Testing

### Run Tests

```bash
npm run test
```

### Available Tests

- `useCounter.test.js` - Tests for useCounter hook
- `useForm.test.js` - Tests for useForm hook
- `useFetch.test.js` - Tests for useFetch hook
- `useTodo.test.js` - Tests for useTodo hook
- `todoReducer.test.js` - Tests for todoReducer

---

## 🎨 Features of Each Practice

### 01-useState

- **CounterApp**: Counter with multiple states
- **CounterWithCustomHook**: Use of custom hook `useCounter`

**Key concepts**: Local state, state updates

### 02-useEffect

- **SimpleForm**: Basic form with effects
- **FormWithCustomHook**: Form with `useForm`
- **Message**: Component with cleanup

**Key concepts**: Side effects, cleanup, dependencies

### 03-Examples

- **MultipleCustomHooks**: Requests to Rick & Morty API
- Use of `useFetch` to get data
- Loading and error states

**Key concepts**: Hook composition, HTTP requests handling

### 04-useRef

- **FocusScreen**: Input focus management
- Direct DOM access

**Key concepts**: References, DOM manipulation

### 05-useLayoutEffect

- **Layout**: Navigation with measurements
- Difference between useEffect and useLayoutEffect

**Key concepts**: Layout measurements, timing

### 06-Memos

- **Memorize**: Preventing re-renders with React.memo
- **MemoHook**: Calculation optimization with useMemo
- **CallbackHook**: Function stability with useCallback

**Key concepts**: Optimization, performance, memoization

### 07-Tarea-Memo

- **Padre-Hijo**: Optimization exercise
- Application of React.memo and useCallback

**Key concepts**: Stable props, render prevention

### 08-useReducer

- **TodoApp**: Complete TODO application
- CRUD operations for tasks
- State managed with reducer

**Key concepts**: Reducers, actions, complex state

### 09-useContext

- **MainApp**: Application with global context
- Simple authentication
- Navigation with React Router
- **Pages**: Home, About, Login

**Key concepts**: Context API, shared state, routing

---

## 🔧 Available Custom Hooks

### `useCounter(initialValue)`

Hook to handle counters with increment, decrement, and reset.

```javascript
const { counter, increment, decrement, reset } = useCounter(10);
```

**Returns**:
- `counter`: Current counter value
- `increment(value)`: Increment by value (default 1)
- `decrement(value)`: Decrement by value (default 1)
- `reset()`: Reset to initial value

### `useFetch(url)`

Hook for making HTTP requests.

```javascript
const { data, isLoading, hasError } = useFetch('https://api.example.com/data');
```

**Returns**:
- `data`: Response data
- `isLoading`: Loading state
- `hasError`: Error object if it occurs

### `useForm(initialForm)`

Hook for handling forms.

```javascript
const { formState, onInputChange, onResetForm } = useForm({
  email: '',
  password: ''
});
```

**Returns**:
- `formState`: Current form state
- `onInputChange(event)`: Handler for input changes
- `onResetForm()`: Reset form to initial values

### `useTodo()`

Hook for managing a TODO list.

```javascript
const {
  todos,
  todosCount,
  pendingTodosCount,
  handleNewTodo,
  handleDeleteTodo,
  handleToggleTodo
} = useTodo();
```

**Returns**:
- `todos`: Array of TODOs
- `todosCount`: Total number of TODOs
- `pendingTodosCount`: Number of pending TODOs
- `handleNewTodo(todo)`: Add a new TODO
- `handleDeleteTodo(id)`: Delete a TODO
- `handleToggleTodo(id)`: Toggle TODO completion status

---

## 🔐 Implemented Security

### State Management

- ✅ Local state with useState
- ✅ Complex state with useReducer
- ✅ Global state with useContext
- ✅ State persistence in localStorage (useTodo)

### Performance Optimization

- ✅ Memoization with useMemo
- ✅ Preventing re-renders with React.memo
- ✅ Function memoization with useCallback
- ✅ Efficient dependency management

### Testing

- ✅ Unit tests for custom hooks
- ✅ Render tests
- ✅ State update tests
- ✅ Test coverage

---

## 💡 Usage Tips

### When to use useState vs useReducer?

- **useState**: For simple, independent state
- **useReducer**: For complex state with multiple related actions

### When to optimize with memo?

- When a component re-renders unnecessarily
- When calculations are expensive
- When passing callbacks to child components

### How to avoid infinite loops in useEffect?

- Correctly specify dependencies
- Use cleanup functions
- Avoid unnecessary state updates

### When to use useRef?

- To access DOM elements directly
- To store mutable values that don't cause re-renders
- To store previous values

---

## 🐛 Troubleshooting

### Common Issues

#### The app doesn't start

```bash
# Clean node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Tests don't run

```bash
# Make sure Jest is installed
npm install --save-dev jest @testing-library/react @testing-library/react-hooks
```

#### Hot reload doesn't work

- Check that you're using Vite correctly
- Restart the development server
- Clear browser cache

---

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Router](https://reactrouter.com)
- [Testing Library](https://testing-library.com/react)

---

## 📧 Support

If you encounter problems or have questions:

- Review the [main documentation](../README.md)
- Check the [source code](https://github.com/Jaguilars5/05-hoock-app)
- Contact the developer: [@Jaguilars5](https://github.com/Jaguilars5)

---

**Last updated**: January 2026

⭐ Enjoy learning React Hooks!
