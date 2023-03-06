import { AiFillDelete } from "react-icons/ai";

const ItemList = () => {
  return (
    <div className="flex w-full">
      <div className="flex-1 mr-6">
        <label className="block max-w-[200px] mb-[10px]" htmlFor="Item Name">
          Item Name
        </label>
        <input
          className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
          type="text"
          name="Item Name"
          id="Item Name"
        />
      </div>
      <div className="max-w-[46px]">
        <label className="block mb-[10px]" htmlFor="Qty">
          Qty
        </label>
        <input
          className="w-full  px-[8px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray"
          type="number"
          name="Qty"
          id="Qty"
        />
      </div>

      <div className="max-w-[100px] mx-6">
        <label className="block mb-[10px]" htmlFor="Price">
          Price
        </label>
        <input
          className="w-full  px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray"
          type="number"
          name="Qty"
          id="Qty"
        />
      </div>

      <div className="flex-1">
        <p className="block mb-[10px]" htmlFor="Total">
          Total
        </p>
        <h3 className="pt-3">156.00</h3>
      </div>

      <AiFillDelete className="relative text-xl top-10" />
    </div>
  );
};
export default ItemList;
