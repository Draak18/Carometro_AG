import "./Alunos.css";
import Header2 from "../../components/header/Header2.jsx";
import lupaImg from "../../images/lupa.png";
import Rosto from "../../images/rosto.png"


function Alunos() {
  return (
    <div>
      <Header2 />
      <div className="tituloPesquisa">
        <div className="tituloAlunos">
          <h1>IDEV2</h1>
        </div>
        <div className="pesquisa">
            <input type="text" />
            <button id="consultarBotao" type="submit" className="consultarBotao">
              <img className="lupaImg" src={lupaImg} />
            </button>
        </div>
      </div>
      <div className="rostoAlunos">
        
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
      </div>
    </div>
  );
}

export default Alunos;




