import Header from "../../components/header/Header.jsx";
import "./Turmas.css";

function Turmas() {
  return (
    <div>
      <Header />
      <div className="fundoTurmas">
        <div className="idevs">
          <h1 id="tituloSalas">DESENVOLVIMENTO DE SISTEMAS</h1>
          <div className="salasIdev">
            <div className="IDEV1">IDEV-1</div>
            <div className="IDEV2">IDEV-2</div>
            <div className="IDEV3">IDEV-3</div>
          </div>
        </div>
        <div className="elecs">
          <h1 id="tituloSalas">ELETROELETRÔNICA</h1>
          <div className="salasElec">
            <div className="ELEC1">IELE-1</div>
            <div className="ELEC2">IELE-2</div>
            <div className="ELEC3">IELE-3</div>
          </div>
        </div>
        <div className="imecs">
          <h1 id="tituloSalas">MECÂNICA</h1>
          <div className="salasImec">
            <div className="IMEC1">IMEC-1</div>
            <div className="IMEC2">IMEC-2</div>
            <div className="IMEC3">IMEC-3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Turmas;
