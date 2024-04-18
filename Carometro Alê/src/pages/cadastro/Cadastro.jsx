import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="fundoCadastro">
      <div className="caixaCadastro">
        <div className="separar">
          <div className="colocarFoto">
              <h1>COLOQUE SUA FOTO</h1>
            <div className="addsuaFOTO">
            </div>
          </div>
          <div className="cadastroFormulario">
            <div className="tituloCadastro">
              <h1>CARÔMETRO</h1>
            </div>
            <form action="">
              <div className="informacoesCadastro">
                <input
                  id="nomeCadastro"
                  type="text"
                  placeholder="Digite seu nome"
                  autoComplete="off"
                />
                <input
                  id="cpfCadastro"
                  type="number"
                  placeholder="Digite seu cpf"
                  autoComplete="off"
                />
                <input
                  id="telefoneCadastro"
                  type="text"
                  placeholder="Digite seu telefone"
                  autoComplete="off"
                />
                <input
                  id="emailCadastro"
                  type="text"
                  placeholder="Digite seu email"
                  autoComplete="off"
                />
                <input
                  id="senhaCadastro"
                  type="password"
                  placeholder="Digite sua senha"
                  autoComplete="off"
                />
                <input
                  id="confirmeSenhaCadastro"
                  type="password"
                  placeholder="Confirme sua senha"
                  autoComplete="off"
                />
              </div>
              <div className="botoesCadastro">
                <button onclick="cadastrar" type="button">
                  Cadastre-se
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
