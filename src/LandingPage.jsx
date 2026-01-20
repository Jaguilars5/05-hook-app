import { Link } from "react-router-dom";
import "./landing.css";

export const LandingPage = () => {
  const practices = [
    {
      id: 1,
      title: "useState - Contador Básico",
      description: "Manejo de estado con objetos",
      path: "/usestate",
      icon: "🔢",
      topics: ["useState", "Estado Local", "Spread Operator"],
    },
    {
      id: 2,
      title: "useState - Custom Hook",
      description: "Contador con useCounter hook",
      path: "/usestate-custom",
      icon: "🎣",
      topics: ["Custom Hooks", "useCounter", "Reutilización"],
    },
    {
      id: 3,
      title: "useEffect - Formulario Simple",
      description: "Efectos secundarios y renderizado condicional",
      path: "/useeffect",
      icon: "📝",
      topics: ["useEffect", "Formularios", "Condicionales"],
    },
    {
      id: 4,
      title: "useEffect - Custom Hook",
      description: "Formulario con useForm hook",
      path: "/useeffect-custom",
      icon: "⚡",
      topics: ["useForm", "Custom Hooks", "Side Effects"],
    },
    {
      id: 5,
      title: "Múltiples Custom Hooks",
      description: "Integración con API de Rick & Morty",
      path: "/examples",
      icon: "🚀",
      topics: ["useFetch", "useCounter", "API"],
    },
    {
      id: 6,
      title: "useRef - Focus Screen",
      description: "Referencias a elementos del DOM",
      path: "/useref",
      icon: "🎯",
      topics: ["useRef", "DOM", "Focus"],
    },
    {
      id: 7,
      title: "useLayoutEffect - Layout",
      description: "Mediciones sincrónicas del DOM",
      path: "/uselayouteffect",
      icon: "📐",
      topics: ["useLayoutEffect", "DOM", "Measurements"],
    },
    {
      id: 8,
      title: "React.memo - Memorize",
      description: "Prevenir re-renders innecesarios",
      path: "/memos",
      icon: "💾",
      topics: ["React.memo", "Performance"],
    },
    {
      id: 9,
      title: "useMemo - Optimización",
      description: "Memorización de valores calculados",
      path: "/memos-usememo",
      icon: "⚡",
      topics: ["useMemo", "Cálculos", "Performance"],
    },
    {
      id: 10,
      title: "useCallback - Funciones",
      description: "Memorización de funciones",
      path: "/memos-callback",
      icon: "🔄",
      topics: ["useCallback", "Funciones", "Optimization"],
    },
    {
      id: 11,
      title: "Tarea: Padre-Hijo",
      description: "Ejercicio de optimización",
      path: "/tarea-memo",
      icon: "📝",
      topics: ["useCallback", "React.memo", "Practice"],
    },
    {
      id: 12,
      title: "useReducer - TODO App",
      description: "Gestión de estado complejo",
      path: "/usereducer",
      icon: "📋",
      topics: ["useReducer", "CRUD", "localStorage"],
    },
    {
      id: 13,
      title: "useContext - App Global",
      description: "Contexto global y navegación",
      path: "/usecontext",
      icon: "🌐",
      topics: ["useContext", "React Router", "Global State"],
    },
  ];

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>🎣 React Hooks - Prácticas</h1>
        <p className="subtitle">
          Colección de ejercicios y ejemplos prácticos de React Hooks
        </p>
        <p className="course-credit">
          🎓 Curso de Fernando Herrera - DevTalles
        </p>
      </header>

      <div className="practices-grid">
        {practices.map((practice) => (
          <Link key={practice.id} to={practice.path} className="practice-card">
            <div className="card-icon">{practice.icon}</div>
            <h3>{practice.title}</h3>
            <p className="card-description">{practice.description}</p>
            <div className="card-topics">
              {practice.topics.map((topic, index) => (
                <span key={index} className="topic-tag">
                  {topic}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <footer className="landing-footer">
        <p>💡 Selecciona una práctica para comenzar</p>
      </footer>
    </div>
  );
};
