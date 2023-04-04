import { useState } from "react";
import CheckedModal from "./CheckedModal";
import Icon from "./Icon";

const Nav = ({ length, open }) => {
  const [showCheckedModal, setCheckedModal] = useState(false);

  const openCheckedModal = () => setCheckedModal(true);
  const closeCheckedModal = () => setCheckedModal(false);

  return (
    <div className="flex items-baseline justify-between mt-1">
      <div className="dark:text-neutral-100">
        <h1 className="font-bold text-[20px]">Invoices</h1>
        <p className="text-gray text-[12px]">
          <span className="mr-1 md:hidden">{length} invoices</span>
          <span className="hidden mr-1 md:inline">
            There are {length} total invoices
          </span>
        </p>
      </div>
      <div className="flex items-baseline">
        <h2
          onMouseOver={openCheckedModal}
          onMouseOut={closeCheckedModal}
          className="font-bold mr-[18px] hover:cursor-pointer dark:text-neutral-100"
        >
          {showCheckedModal && (
            <CheckedModal
              showDialog={showCheckedModal}
              close={closeCheckedModal}
              open={openCheckedModal}
            />
          )}
          Filter <span className="hidden pl-1 md:inline">by status</span>
        </h2>
        <div>
          <Icon id="arrow-down" size={18} stroke={4} color="" />
        </div>

        <button
          aria-label="toggle create invoice modal"
          type="submit"
          className="text-brand-100 rounded-full items-center justify-between flex bg-brand-450 ml-[18px] p-[10px] hover:bg-brand-450-light"
          onClick={open}
        >
          <span className="p-1 mr-3 rounded-full bg-brand-100">
            <Icon
              id="plus-icon"
              color={"hsl(252deg, 94%, 67%)"}
              size=""
              strokeWidth={3}
            />
          </span>
          <p className="text-sm font-[500] pr-[8px]">
            New
            <span className="hidden pl-1 md:inline">Invoice</span>{" "}
          </p>
        </button>
      </div>
    </div>
  );
};
export default Nav;
