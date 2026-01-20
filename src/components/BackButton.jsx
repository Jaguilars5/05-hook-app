import { useNavigate } from "react-router-dom";
import "./BackButton.css";

export const BackButton = ({ to = "/" }) => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(to)}>
      ← Volver al inicio
    </button>
  );
};
