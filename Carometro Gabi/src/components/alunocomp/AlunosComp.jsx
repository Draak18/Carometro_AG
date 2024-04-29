import Header from "../../components/header/Header.jsx";
import "../alunocomp/AlunosComp.css";
import Rosto from "../../images/rosto.png";
import Gradiente from "../../images/gradiente.jpeg";


function AlunosComp() {
  return (
    <div>
      <Header />
      <div className="aluno">
        <div className="fotoDoAluno">
          <img className="fotR" src={Rosto} />
        </div>
        <div className="gradienteFoto">
          <img className="fotoG" src={Gradiente}  />

        </div>
        <div className="informacoesDoAluno">
          {/* <h1>Raquel</h1>
          <h2>IDEV2</h2> */}
        </div>
        <div className="linhaVermelha">

        </div>
      </div>
    </div>
  );
}

export default AlunosComp;
