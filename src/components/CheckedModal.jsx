import { DialogContent } from "@reach/dialog";
// import { useState } from "react";
import CheckboxSelect from "./CheckboxSelect";
import "@reach/dialog/styles.css";

const CheckedModal = ({ close, showDialog }) => {
  // const [checked, setChecked] = useState(true);

  const options = [
    { label: "Draft", value: "draft" },
    { label: "Pending", value: "pending" },
    { label: "Paid", value: "paid" },
  ];

  return (
    <div className="absolute w-[192px] drop-shadow-lg">
      <DialogContent
        style={{
          width: "192px",
          borderRadius: "8px",
          paddingBottom: "24px",
          paddingLeft: "24px",
          paddingTop: "1px",
          position: "relative",
          left: "-46px",
          top: "-34px",
        }}
      >
        <div className="container mx-auto mt-8 mb-4">
          <CheckboxSelect options={options} />
        </div>
      </DialogContent>
    </div>
  );
};
export default CheckedModal;
