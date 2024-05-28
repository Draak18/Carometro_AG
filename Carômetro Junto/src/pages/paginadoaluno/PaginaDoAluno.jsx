import Header from "../../components/header/Header.jsx";
import "./PaginaDoAluno.css";
import RostoA from "../../images/rosto.png";
import React, { useState, useEffect } from "react";

function PaginaDoAluno() {
  const [showCard, setShowCard] = useState(false);

  const mostrarCard = () => {
    setShowCard(!showCard);
  };
  return (
    <div>
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
                    <input className="inputNormal" type="number" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">Celular:</label>
                    <input className="inputNormal" type="text" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">CEP:</label>
                    <input className="inputNormal" type="number" />
                  </div>
                  <div className="espacamento">
                    <label id="teste">Data de Nascimento:</label>
                    <input
                      className="inputNormal"
                      id="dataNascimento"
                      type="date"
                    />
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
                  <div className="botaoPaginaAluno">
                    <button onClick={mostrarCard}>OCORRÊNCIA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCard && (
        <div>
          <div className="overlay" />
          <div className="card">
            {
              <div className="boxCard">
                <button
                  className="botaoFechar"
                  onClick={() => setShowCard(false)}
                >
                  FECHAR
                </button>
              </div>
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default PaginaDoAluno;
