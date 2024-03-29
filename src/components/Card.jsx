import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import Receipt from "./Receipt";

const Card = ({ id, clientName, paymentDue, total, status }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/view-invoice/${id}`)}
      className="flex bg-neutral-100 rounded-150 dark:bg-brand-800  max-h-[134px] p-[24px] mt-[16px] md:items-center hover:cursor-pointer "
    >
      <div className="flex flex-col flex-1 md:flex-row md:mt-1">
        <h2 className="flex-1 text-sm font-bold text-gray-dark-63 md:mt-1 dark:text-brand-400">
          #<span className="text-black dark:text-neutral-100">{id}</span>
        </h2>
        <p className="md:flex-1 dark:text-brand-200">Due {paymentDue}</p>
        <h2 className="text-lg font-bold md:flex-1 dark:text-neutral-100">
          £ <span>{total}</span>
        </h2>

        <p className="mb-[28px] text-gray-dark-61 dark:text-neutral-100 md:flex-1">
          {clientName}
        </p>

        <Receipt className="" status={status}>
          <p className="ml-[6px]  capitalize">{status}</p>
        </Receipt>
      </div>
      <div className="flex flex-col justify-between md:hidden md:flex-1 md:items-center">
        <p className="text-gray-dark-61 md:flex-1">{clientName}</p>

        <Receipt status={status}>
          <p className="ml-[6px] capitalize">{status}</p>
        </Receipt>
      </div>
      <Icon className="hidden md:inline md:ml-[20px]" id="arrow-down" />
    </div>
  );
};
export default Card;
