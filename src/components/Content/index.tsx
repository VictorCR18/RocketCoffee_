import Copos from '../../assets/rocket-coffee.png'

import "./styles.scss";

export function Content() {
  return (
    <div className="content-content">
      <div className="titulo-content">
        <h1>Great Coffee</h1>
        <h2>&lt;Great Code/&gt;</h2>
      </div>
      <div className="copos-content">
        <img src={Copos}/>
      </div>
    </div>
  );
}
