import * as Dialog from "@radix-ui/react-dialog";

import Close from "../../assets/menu-buguer-close.svg"
import LogoD from "../../assets/logo-desktop.svg";
import LogoM from "../../assets/logo-mobile.svg";

import "./styles.scss";

export function Header() {
  const Modal = () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <label htmlFor="checkbox" className="hamburguer">
          <span className="line line--top"></span>
          <span className="line line--middle"></span>
        </label>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">
            {" "}
            <div className="logoModal">
              <img className="union" src={LogoM} />
              <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                  <img src={Close} />
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            <div className="navbar-modal">
              <a href="/" className="label-header">
                Home
              </a>
              <a href="/" className="label-header">
                Menu
              </a>
              <a href="/" className="label-header">
                Recompensas
              </a>
              <a href="/" className="label-header">
                Gift Cards
              </a>
              <a href="/" className="label-header">
                Lojas
              </a>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );

  return (
    <div className="content-header">
      <div className="navM">
        <div className="logo">
          <img className="union" src={LogoM} />
        </div>
        <Modal />
      </div>
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
