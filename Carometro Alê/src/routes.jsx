import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Turmas from "./pages/turma/Turmas";
import Login from "./pages/login/Login";
import Alunos from "./pages/alunos/Alunos";
import Foto from "./pages/foto/Foto";
import Cadastro from "./pages/cadastro/Cadastro";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turmas" element={<Turmas />} />
      <Route path="/login" element={<Login />} />
      <Route path="/alunos" element={<Alunos />} />
      <Route path="/foto" element={<Foto />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default MainRoutes;
