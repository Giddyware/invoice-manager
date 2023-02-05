import Receipt from "../Receipt/Receipt";

const Card = ({ id, clientName, paymentDue, total, status }) => {
  return (
    <div className="flex bg-offWhite max-h-[134px] p-[24px] mt-[16px]">
      <div className="flex flex-col flex-1">
        <h2 className="flex-1 text-sm font-bold text-gray-dark-63">
          #<span className="text-black">{id}</span>
        </h2>
        <p className="">{paymentDue}</p>
        <h2 className="text-lg font-bold">
          £ <span>{total}</span>
        </h2>
      </div>
      <div className="self-end">
        <p className="text-gray-dark-61 ">{clientName}</p>

        <Receipt status={status}>
          <p className="ml-[6px] capitalize">{status}</p>
        </Receipt>
      </div>
    </div>
  );
};
export default Card;
