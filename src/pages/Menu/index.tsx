import * as Dialog from "@radix-ui/react-dialog";

import { Card } from "../../components/Card";

import "./styles.scss";
import { Cross2Icon } from "@radix-ui/react-icons";

export function Menu() {
  const DialogDemo = () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="ButtonCard violet">Edit profile</button>
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
              <button className="IconButtonCard" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );

  return (
    <div className="content-menu">
      <Card />
      <Card />
      <Card />
      <DialogDemo />
    </div>
  );
}
