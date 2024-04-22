import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Foto from  "./pages/foto/Foto"
import Alunos from "./pages/alunos/Alunos";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/foto" element={<Foto />} />
      <Route path="/alunos" element={<Alunos />} />
    </Routes>
  );
}

export default MainRoutes;
