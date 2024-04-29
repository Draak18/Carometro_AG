import "./Alunos.css";
import Header2 from "../../components/header/Header2.jsx";
import lupaImg from "../../images/lupa.png";
import Gradiente from "../../images/gradiente.png"


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
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
          <div className="textos">
            <div className="nomeAluno">A</div>
          </div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente} />
          </div>
          <div className="linha"></div>
        </div>
        <div className="aluno">
          <div className="sombra">
            <img src={Gradiente}  />
          </div>
          <div className="linha"></div>
        </div>
      </div>
    </div>
  );
}

export default Alunos;




