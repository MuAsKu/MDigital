import { Link } from "react-router-dom";
import "./Navigation.module.css";

export function Navigation() {
  const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#e0e0e0",
    color: "#000",
  };

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={linkStyle}>
        Пользователи
      </Link>
      <Link to="/todos" style={linkStyle}>
        Todo-лист
      </Link>
      <Link to="/dashboard" style={linkStyle}>
        Dashboard
      </Link>
    </nav>
  );
}
