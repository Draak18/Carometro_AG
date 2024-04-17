import Header from "../../components/header/Header.jsx";
import "./Login.css";

function Login() {
  return (
    <div>
      <Header />
      <div className="fundo">
        <div className="caixaLogin">
          <div className="titulo">
            <h1>CARÔMETRO</h1>
          </div>
          <div className="caixaFormulario">
            <form action="">
              <div className="informacoes">
                <input id="nome" type="text" placeholder="Digite seu nome"/>
                <input id="email" type="text" placeholder="Digite seu email"/>
                <input id="senha" type="password" placeholder="Digite sua senha"/>
              </div>
              <div className="botoes">
                <button onclick="logar" type="submit">Faça login</button>
                <button onclick="cadastrar" type="submit">Cadastre-se</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
