import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./../../images/logoSenai.jfif";
function Header() {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <Link to="/turmas">Turmas</Link>
        <Link to="/alunos">Alunos</Link>
        <Link to="/login">Login</Link>
        <Link to="/foto">Tirar Foto</Link>
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
}

export default Header;
