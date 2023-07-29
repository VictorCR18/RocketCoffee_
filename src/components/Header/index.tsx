import "./styles.scss";
import LogoD from "../../assets/logo-desktop.svg";

export function Header() {
  return (
    <div className="content-header">
      <nav className="nav">
        <div>
          <img className="logoD" src={LogoD} />
        </div>
        <div className="links-header">
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="/">Recompensas</a>
          <a href="/">Gift Cards</a>
          <a href="/">Lojas</a>
        </div>
        <div className="button-header">
          <a href="/">PEGAR MEU CAFÉ</a>
        </div>
      </nav>
    </div>
  );
}
