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
            <div class="nome">
              <h1>Gabrielle de Lima Quinquio</h1>
              <div className="separarInformacao">
                <div className="parte1">
                  <div className="robson">
                  <label>Email:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="robson">
                  <label>CPF:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="robson">
                  <label>Celular:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="robson">
                  <label>CEP:</label>
                  <input className="inputNormal" type="text" />
                  </div>
                  <div className="robson">
                  <label>Data de nascimento:</label>
                  <input className="inputDiferente" type="text" />
                  </div>  
                </div>
                <div className="parte2">
                    <div>
                      <label>Bairro:</label>
                      <input className="inputNormal" type="text" />
                    </div>
                    <div>
                      <label>Estado:</label>
                      <input className="inputNormal" type="text" />
                    </div>
                    <div>
                      <label>Cidade:</label>
                      <input className="inputNormal" type="text" />
                    </div>
                    <div>
                      <label>Rua:</label>
                      <input className="inputNormal" type="text" />
                    </div>
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
