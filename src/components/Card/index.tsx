import "./styles.scss";

export function Card() {
  return (
    <div className="content-card">
      <div className="imageCard"></div>
      <div className="inforCard">
        <h1>R$ 99,00</h1>
        <label>Nome</label>
        <label>DialogDescription</label>
      </div>
    </div>
  );
}
