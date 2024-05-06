import Header from "../../components/header/Header.jsx";
import "../alunocomp/AlunosComp.css";
import Gradiente from "../../images/gradiente.png";


function AlunosComp() {
  return (
    <div>
      <div className="rostoAlunos">
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
          <div className="textos">
            <div className="nomeAluno">Gabrielle de Lima Quinquio</div>
            <div className="turmaAluno">IDEV2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlunosComp;
