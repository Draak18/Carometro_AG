import Header from "../../components/header/Header.jsx";
import "../alunocomp/AlunosComp.css";
import Rosto from "../../images/rosto.png";
import Gradiente from "../../images/gradiente.png";


function AlunosComp() {
  return (
    <div>
      <div className="aluno">
        <div className="fotoDoAluno">
          <img className="fotoR" src={Rosto} />
        </div>
        <div className="gradienteFoto">
          <img className="fotoG" src={Gradiente}  />
        </div>
        <div className="informacoesDoAluno">
          <div className="nome"><h1>Alexandre Magalhães Deboletta</h1></div>
          <div className="turma"><h3>IDEV2</h3></div>
        </div>
        <div className="linhaVermelha">
        </div>
      </div>
    </div>
  );
}

export default AlunosComp;
