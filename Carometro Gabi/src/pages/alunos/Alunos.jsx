import "./Alunos.css";
import Header from "../../components/header/Header.jsx";
import lupaImg from "../../images/lupa.png";


function Alunos() {
  return (
    <div>
      <Header />
      <div className="tituloPesquisa">
        <div className="titulo">
          <h1>IDEV2</h1>
        </div>
        <div className="pesquisa">
            <input type="text" />
            <button id="consultarBotao" type="submit" name="consultarBotao">
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
        <div className="aluno">
          <h1>iiiiiiiii</h1>
        </div>
      </div>
    </div>
  );
}

export default Alunos;




