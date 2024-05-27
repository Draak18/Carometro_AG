import Header from "../../components/header/Header.jsx";
import "./PaginaDoAluno.css";
import RostoA from "../../images/rosto.png";

function PaginaDoAluno() {
  return (
    <div >
      <Header />
      <div className="fundoDoAluno">
        <div className="separarPagina">
          <div className="rostoAluno">
            <img src={RostoA} />
          </div>
          <div className="informacoesPaginaAluno">
            <div class="tudo">
            <div className="nome">
              <h1>Gabrielle de Lima Quinquio</h1>
            </div>
              <div className="separarInformacao">
                <div className="parte1">
                  <div className="espacamento">
                  <label id="teste">Email:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                  <label id="teste">CPF:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                  <label id="teste">Celular:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                  <label id="teste">CEP:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                  <label id="teste">Data de Nascimento:</label>
                  <input className="inputNormal" type="text" />
                  </div>  
                </div>
                <div className="parte2">
                    <div className="espacamento">
                      <label id="teste">Bairro:</label>
                      <input className="inputNormal" type="text" />
                    </div>
                    <div className="espacamento">
                      <label id="teste">Estado:</label>
                      <input className="inputNormal" type="text" />
                    </div>
                    <div className="espacamento">
                      <label id="teste">Cidade:</label>
                      <input className="inputNormal" type="text" />
                    </div>
                    <div className="espacamento">
                      <label id="teste">Rua:</label>
                      <input className="inputNormal" type="text" />
                    </div>
                    <div className="botao"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDoAluno;
