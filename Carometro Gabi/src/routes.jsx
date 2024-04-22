import { Routes, Route } from "react-router-dom";
import Rosto from "./components/alunocomp/AlunosComp";
import Home from "./pages/home/Home";
import Alunos from "./pages/alunos/Alunos";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rosto" element={<Rosto/>}/>
      <Route path="/alunos" element={<Alunos />} />
    </Routes>
  );
}

export default MainRoutes;
