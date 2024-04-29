import Header from "../../components/header/Header.jsx";
import "../alunocomp/AlunosComp.css";
import Gradiente from "../../images/gradiente.jpeg";


function AlunosComp() {
  return (
    <div>
     <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} alt="" />
          </div>
        </div>
    </div>
  );
}

export default AlunosComp;
