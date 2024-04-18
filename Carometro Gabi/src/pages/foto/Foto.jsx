import "./Foto.css";
import Header from "../../components/header/Header.jsx";
import imgUpload from "../../images/upload.png";
import imgCerto from "../../images/certo.png";
import imgErrado from "../../images/errado.png";

function Foto() {
  return (
    <div>
      <Header />
      <div className="fundoFoto">
        <div className="metade1">
          <div className="caixaFoto">
            <div className="imgUpload">
              <img className="centralizar" src={imgUpload} />
              
            </div>
            <div className="certoErrado">
                <div className="imagemContainer">
                  <img className="imgC" src={imgCerto} />
                </div>
                <div className="imagemContainer">
                  <img className="imgE" src={imgErrado} />
                </div>
              </div>
          </div>
        </div>
        <div className="metade2">
        </div>
      </div>
    </div>
  );
}

export default Foto;
