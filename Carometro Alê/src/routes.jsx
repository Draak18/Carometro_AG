import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Turmas from "./pages/turma/Turmas";
import Login from "./pages/login/Login";
import Alunos from "./pages/alunos/Alunos";
import Foto from "./pages/foto/Foto";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turmas" element={<Turmas />} />
      <Route path="/login" element={<Login />} />
      <Route path="/alunos" element={<Alunos />} />
      <Route path="/foto" element={<Foto />} />
    </Routes>
  );
}

export default MainRoutes;
