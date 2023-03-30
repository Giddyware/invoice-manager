import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const ItemList = ({ previtems }) => {
  const [items, setItems] = useState(previtems);

  const onBlurHandler = (e) => {
    console.dir(e.target);
  };

  return (
    <>
      {previtems.map(({ name, quantity, price, total }) => (
        <div key={name} className="flex w-full">
          <div className="flex-1 mr-6">
            <label className="block max-w-[200px] mb-[10px]" htmlFor="ItemName">
              Item Name
            </label>
            <input
              className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
              type="text"
              name="ItemName"
              id="ItemName"
              defaultValue={name}
              // onChange={(e) => setItems({ ...items, name: e.target.value })}
              onBlur={onBlurHandler}
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
              defaultValue={quantity}
              // onChange={(e) => setItems({ ...items, quantity: e.target.value })}
            />
          </div>

          <div className="max-w-[100px] mx-6">
            <label className="block mb-[10px]" htmlFor="Price">
              Price
            </label>
            <input
              className="w-full  px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray"
              type="number"
              name="price"
              id="price"
              defaultValue={price}
              // onChange={(e) => setItems({ ...items, price: e.target.value })}
            />
          </div>

          <div className="flex-1">
            <p className="block mb-[10px]" htmlFor="Total">
              Total
            </p>
            <h3 className="pt-3">{total}</h3>
          </div>

          <AiFillDelete className="relative text-xl top-10 hover:cursor-pointer hover:text-light-urgent" />
        </div>
      ))}
    </>
  );
};
export default ItemList;
