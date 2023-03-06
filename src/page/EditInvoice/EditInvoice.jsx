import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Input from "../../components/FormItem";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import ItemList from "../../components/ItemList";

const EditInvoice = () => {
  const [date, setDate] = useState(0);

  const navigate = useNavigate();

  let paymentTermList = [
    {
      id: "1",
      day: "1",
    },
    {
      id: "2",
      day: "7",
    },
    {
      id: "3",
      day: "14",
    },
    {
      id: "4",
      day: "30",
    },
  ];

  return (
    <div className="flex flex-col bg-white-light lg:flex-row">
      <Header />

      <main className="px-[24px] h-full py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        <div
          onClick={() => navigate(-1)}
          className="flex items-baseline hover:cursor-pointer w-fit"
        >
          <Icon id="arrow-left" />
          <h3 className="ml-[24px] font-bold text-[12px]">Go back</h3>
        </div>

        <h2 className="mt-[24px] font-bold text-[24px]">Edit #XM9141</h2>
        <h3 className="my-[24px] font-bold text-[12px] text-primary">
          Bill From
        </h3>

        <form className="text-gray-dark-63 font-[12px]" type="" action="">
          <Input
            id="street"
            name="street"
            label="Name"
            placeholder="19 Union Terrace"
            type="text"
          />

          <div className="flex justify-between my-[24px]">
            <Input
              id="city"
              name="city"
              label="City"
              placeholder="London"
              type="text"
            />
            <Input
              id="postCode"
              name="postCode"
              label="Post Code"
              placeholder="E1 3EZ"
              type="text"
            />
          </div>

          <Input
            id="Country"
            name="Country"
            label="Country"
            placeholder="United Kingdom"
            type="text"
          />

          <h2 className="my-[24px] font-bold text-[12px] text-primary">
            Bill To
          </h2>

          <Input
            id="Client's Name Address"
            name="Client's Name Address"
            label="Client's Name Address"
            placeholder="United Kingdom"
            type="text"
          />

          <Input
            id="streetAddress2"
            name="Street Address"
            label="Street Address"
            placeholder="84 Church Way"
            type="text"
          />

          <div className="flex justify-between mb-[24px]">
            <Input
              id="city2"
              name="city2"
              label="City"
              placeholder="Bradford"
              type="text"
            />

            <Input
              id="Post Code2"
              name="Post Code2"
              label="Post Code"
              placeholder="BD1 9PB"
              type="text"
            />
            <Input
              id="Country"
              name="Country"
              label="Country"
              placeholder="BD1 9PB"
              type="text"
            />
          </div>

          <div className="flex justify-between mb-[24px]">
            <div className="relative flex-1 max-w-sm">
              <label className="block mb-2" htmlFor="Invoice Date">
                Invoice Date
              </label>

              <input
                datepicker
                type="date"
                className="bg-gray-50 shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:ring-opacity-50 block w-full pl-10 p-2.5"
                placeholder="Select date"
              />
            </div>

            <div className="flex-1 ml-6">
              <label
                Htmlfor="paymentTerms"
                className="block mb-2 text-sm text-gray-900"
              >
                Payment Terms
              </label>
              <select
                id="paymentTerms"
                className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              >
                <option selected>Choose a payment Term</option>

                {paymentTermList.map(({ id, day }) => (
                  <option className="hover:text-primary" value={day}>
                    Net {day} Day
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Input
            id="Project Description"
            name="Project Description"
            label="Project Description"
            placeholder="Graphic Design"
          />

          <h2 className="my-[24px] font-bold text-[18px] text-gray-dark-61">
            Item List
          </h2>

          <ItemList />

          <div className="w-full p-4 font-bold text-center rounded-3xl text-gray-dark-63 bg-gray">
            + Add New Item
          </div>
        </form>
        <div className="my-8 text-xs text-urgent">
          <span className="block">- All fields must be added</span>
          <span className="block">- An item must be added</span>
        </div>
        <div className="flex justify-end font-medium">
          <button className="px-[24px] py-[16px] md:mr-[8px] bg-draft-light rounded-full capitalize text-gray-dark-63 hover:bg-gray">
            cancel
          </button>
          <button className="px-[24px] py-[16px] rounded-full bg-primary capitalize hover:bg-primary-light text-[white]">
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditInvoice;
