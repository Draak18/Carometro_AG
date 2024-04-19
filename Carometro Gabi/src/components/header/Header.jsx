import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/foto">Foto</Link>
        <Link to="/alunos">Alunos</Link>
      </div>
    </header>
  );
}

export default Header;
