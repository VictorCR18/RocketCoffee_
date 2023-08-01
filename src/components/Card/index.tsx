import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.scss";

import * as Dialog from "@radix-ui/react-dialog";

export function Card() {
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="ButtonCard violet">
            <div className="content-card">
              <div className="imageCard"></div>
              <div className="inforCard">
                <h1>R$ 99,00</h1>
                <label>Nome</label>
                <label>DialogDescription</label>
              </div>
            </div>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlayCard" />
          <Dialog.Content className="DialogContentCard">
            <div className="imageProd"></div>
            <div className="conteudo">
              <Dialog.Title className="DialogTitleCard">
                Edit profile
              </Dialog.Title>
              <Dialog.Description className="DialogDescriptionCard">
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
              <Dialog.Close asChild>
                <div className="buttonCard">
                  <button>Adicionar ao carrinho</button>
                </div>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button className="IconButtonCard" aria-label="Close">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
