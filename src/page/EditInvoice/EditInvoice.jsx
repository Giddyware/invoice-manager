import { useState } from "react";
import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";

const EditInvoice = () => {
  const [date, setDate] = useState(0);
  return (
    <div className="flex flex-col bg-white-light lg:flex-row">
      <Header />

      <main className="px-[24px] h-full py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        <div className="flex items-baseline">
          <Icon id="arrow-left" />
          <h3 className="ml-[24px] font-bold text-[12px]">Go back</h3>
        </div>

        <h2 className="mt-[24px] font-bold text-[24px]">Edit #XM9141</h2>
        <h3 className="my-[24px] font-bold text-[12px] text-primary">
          Bill From
        </h3>

        <form className="text-gray-dark-63 font-[12px]" type="" action="">
          <label className="mb-[10px] block" htmlFor="street">
            Street Address
          </label>
          <input
            className="w-full px-[20px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="text"
            name="street"
            id="street"
            placeholder="19 Union Terrace"
          />

          <div className="flex justify-between my-[24px]">
            <div className="">
              <label className="block mb-[10px]" htmlFor="city">
                City
              </label>
              <input
                className="mr-4 py-[16px] px-[20px] h-[48px] rounded-[4px] border-solid border border-gray"
                type="text"
                name="city"
                id="city"
                placeholder="London"
              />
            </div>

            <div className="">
              <label className="block mb-[10px]" htmlFor="Post Code">
                Post Code
              </label>
              <input
                className="py-1 px-[20px] h-[48px] rounded-[4px] border-solid border border-gray"
                type="text"
                name="Post Code"
                id="Post Code"
                placeholder="E1 3EZ"
              />
            </div>
          </div>

          <label className="block mb-[10px]" htmlFor="Country">
            Country
          </label>
          <input
            className="w-full px-[20px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="text"
            name="Country"
            id="Country"
            placeholder="United Kingdom"
          />

          <h2 className="my-[24px] font-bold text-[12px] text-primary">
            Bill To
          </h2>

          <label className="block mb-[10px]" htmlFor="Client's Name">
            Client's Name Address
          </label>
          <input
            className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="text"
            name="Client's Name"
            id="Client's Name"
            placeholder="Alex Grim"
          />

          {/* <label className="block mb-[10px]" htmlFor="Client's Email">
            Client's Email Address
          </label>
          <input
            className="w-full px-[20px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="email"
            name="Client's Email"
            id="Client's Email"
          /> */}

          <label className="block mb-[10px]" htmlFor="street2">
            Street Address
          </label>
          <input
            className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="text"
            name="street2"
            id="street2"
            placeholder="84 Church Way"
          />

          <div className="flex justify-between mb-[24px]">
            <div className="">
              <label className="block mb-[10px]" htmlFor="city2">
                City
              </label>
              <input
                className="mr-4 py-[16px] px-[20px] h-[48px] rounded-[4px] border-solid border border-gray"
                type="text"
                name="city2"
                id="city2"
                placeholder="Bradford"
              />
            </div>

            <div className="">
              <label className="block mb-[10px]" htmlFor="Post Code2">
                Post Code
              </label>
              <input
                className="py-1 px-[20px] h-[48px] rounded-[4px] border-solid border border-gray"
                type="text"
                name="Post Code2"
                id="Post Code2"
                placeholder="BD1 9PB"
              />
            </div>
          </div>

          <label className="block mb-[10px]" htmlFor="Invoice Date">
            Invoice Date
          </label>
          <input
            onChange={(event) => {
              console.log(event.target.value);
              setDate(event.target.value);
              console.log(date);
            }}
            className="w-full px-[20px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="date"
            name="Invoice Date"
            id="Invoice Date"
            placeholder="2021-08-21"
          />

          <label className="block mb-[10px]" htmlFor="Payment Terms">
            Payment Terms
          </label>
          <input
            className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="select"
            name="Payment Terms"
            id="Payment Terms"
          />

          <label className="block mb-[10px]" htmlFor="Project Description">
            Project Description
          </label>
          <input
            className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="text"
            name="Project Description"
            id="Project Description"
          />

          <h2 className="my-[24px] font-bold text-[18px] text-gray-dark-61">
            Item List
          </h2>

          <label className="block mb-[10px]" htmlFor="Item Name">
            Item Name
          </label>
          <input
            className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="text"
            name="Item Name"
            id="Item Name"
          />

          <div className="flex w-full">
            <div className="flex-1">
              <label className="block mb-[10px]" htmlFor="Qty">
                Qty
              </label>
              <input className="w-full" type="number" name="Qty" id="Qty" />
            </div>

            <div>
              <label className="block mb-[10px]" htmlFor="Price">
                Price
              </label>
              <input type="number" name="Price" id="Pric2" />
            </div>

            <div>
              <label className="block mb-[10px]" htmlFor="Total">
                Total
              </label>
              <input type="number" name="Total" id="Total" />
            </div>
          </div>

          <label className="block mb-[10px]" htmlFor="Item Name">
            Item Name
          </label>
          <input
            className="w-full px-[20px] mb-[24px] py-[16px] h-[48px] rounded-[4px] border-solid border border-gray lg:block lg:w-full"
            type="text"
            name="Item Name"
            id="Item Name"
          />

          <div className="flex w-full">
            <div>
              <label className="block mb-[10px]" htmlFor="Qty">
                Qty
              </label>
              <input type="number" name="Qty" id="Qty" />
            </div>

            <div>
              <label className="block mb-[10px]" htmlFor="Price">
                Price
              </label>
              <input type="number" name="Price" id="Price" />
            </div>

            <div>
              <label className="block mb-[10px]" htmlFor="Total">
                Total
              </label>
              <input type="number" name="Total" id="Total" />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditInvoice;
