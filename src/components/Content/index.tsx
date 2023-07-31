import Copos from "../../assets/rocket-coffee.png";
import Flecha from "../../assets/arrow.svg";
import "./styles.scss";
import { Link } from "react-router-dom";

export function Content() {
  return (
    <div className="content-content">
      <div className="textoM">
        <label>O café que fará seu código decolar para o próximo nível.</label>
      </div>
      <div className="button-header2">
        <Link to="/">PEGAR MEU CAFÉ </Link>
        <img src={Flecha} />
      </div>
      <div className="titulo-content">
        <h1>Great Coffee</h1>
        <h2>&lt;Great Code/&gt;</h2>
      </div>
      <div className="copos-content">
        <img src={Copos} />
      </div>
    </div>
  );
}
