import * as Dialog from "@radix-ui/react-dialog";

import Close from "../../assets/menu-buguer-close.svg";
import LogoD from "../../assets/logo-desktop.svg";
import LogoM from "../../assets/logo-mobile.svg";

import "./styles.scss";
import { Link } from "react-router-dom";

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
              <Dialog.Close asChild>
                <Link to="/" className="label-header">
                  Home
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link to="/menu" className="label-header">
                  Menu
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link to="/" className="label-header">
                  Recompensas
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link to="/" className="label-header">
                  Gift Cards
                </Link>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Link to="/" className="label-header">
                  Lojas
                </Link>
              </Dialog.Close>
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
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/">Recompensas</Link>
          <Link to="/">Gift Cards</Link>
          <Link to="/">Lojas</Link>
        </div>
        <div className="button-header">
          <Link to="/">PEGAR MEU CAFÉ</Link>
        </div>
      </nav>
    </div>
  );
}
