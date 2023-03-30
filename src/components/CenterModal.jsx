import { DialogContent, DialogOverlay } from "@reach/dialog";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InvoiceContext } from "../context/invoiceContext";

const CenterModal = ({ id, close, showDialog }) => {
  // const [showDialog, setShowDialog] = useState(false);
  const { invoices, deleteInvioce } = useContext(InvoiceContext);
  const buttonRef = useRef();
  //   const open = () => setShowDialog(true);
  //   const close = () => setShowDialog(false);
  let navigate = useNavigate();

  return (
    <div>
      <DialogOverlay isOpen={showDialog} onDismiss={close}>
        <DialogContent
          style={{
            borderRadius: "8px",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            margin: "auto",
            width: "480px",
            height: "250px",
          }}
        >
          <p className="font-bold text-[24px] capitalize">confirm deletion</p>
          <p className="pt-[12px] text-gray-dark-61 leading-5 text-[14px] mb-auto">
            Are you sure you want to delete invoice #{id}? This action cannot be
            undone.
          </p>

          <div className="text-neutral-100 absolute bottom-10 right-12">
            <button
              onClick={close}
              ref={buttonRef}
              className="px-[24px] py-[16px] mr-1 bg-light-draft rounded-full capitalize text-brand-400 hover:cursor-pointer"
            >
              cancel
            </button>

            <button
              ref={buttonRef}
              onClick={() => {
                deleteInvioce(id);
                navigate(-1);
              }}
              className="px-[24px] py-[16px] rounded-full bg-accent-urgent capitalize hover:cursor-pointer"
            >
              delete
            </button>
          </div>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};
export default CenterModal;
