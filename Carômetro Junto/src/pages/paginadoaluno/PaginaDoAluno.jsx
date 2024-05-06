import Header from "../../components/header/Header.jsx";
import "./PaginaDoAluno.css";

function PaginaDoAluno() {
  return (
    <div >
      <Header />
      <div className="fundoDoAluno">
        <div className="separarPagina">
          <div className="fotoPaginaAluno"></div>
          <div className="informacoesPaginaAluno">
            <p>Nome</p>
            <p>Email</p>
            <p>CPF</p>
            <p>Celular</p>
            <p>CEP</p>
            <p>Ocorrencias</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaDoAluno;
