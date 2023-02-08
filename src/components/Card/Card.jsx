import Icon from "../Icon/Icon";
import Receipt from "../Receipt/Receipt";

const Card = ({ id, clientName, paymentDue, total, status }) => {
  return (
    <div className="flex bg-offWhite max-h-[134px] p-[24px] mt-[16px] md:items-center ">
      <div className="flex flex-col flex-1 md:flex-row md:mt-1">
        <h2 className="flex-1 text-sm font-bold text-gray-dark-63 md:mt-1">
          #<span className="text-black">{id}</span>
        </h2>
        <p className="md:flex-1">{paymentDue}</p>
        <h2 className="text-lg font-bold md:flex-1">
          £ <span>{total}</span>
        </h2>
      </div>
      <div className="self-end md:flex md:flex-1 md:items-center">
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
