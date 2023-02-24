import { Dialog } from "@reach/dialog";

import "@reach/dialog/styles.css";
import { Tab, TabList, TabPanel, Tabs } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { VisuallyHidden } from "@reach/visually-hidden";

import { useState } from "react";
import EditInvoice from "../../page/EditInvoice";

const SideModal = ({showSideModal,open,close, children }) => {
  // const [showSideModal, setShowModal] = useState(false);

  // const open = () => setShowModal(true);
  // const close = () => setShowModal(false);

  return (
    <div>
      <button onClick={open}>open modal</button>
      <Dialog
        className="modal"
        style={{
          borderRadius: "0 20px 20px 0",
          position: "fixed",
          top: "0",
          margin: "0",
          left: "0",
          height: "100%",
          overflow: "auto",
          width: "fit-content",
          padding: "0",
        }}
        isOpen={showSideModal}
        onDismiss={close}
      >
        <button
          className="close-button"
          style={{
            position: "fixed",
            left: "840px",
            top: "24px",
            fontWeight: "bold",
            color: "hsl(231deg, 20%, 61%)",
            width: "30px",
            height: "30px",
          }}
          onClick={close}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>X</span>
        </button>
        {children}
      </Dialog>
    </div>
  );
};
export default SideModal;