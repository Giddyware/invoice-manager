import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Input from "../../components/FormItem";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import ItemList from "../../components/ItemList";
import { InvoiceContext } from "../../context/invoiceContext";

const EditInvoice = ({ invoice }) => {
  const [clientName, setClientName] = useState(invoice.clientName);
  const [clientEmail, setClientEmail] = useState(invoice.clientEmail);
  const [paymentTerms, setPaymentTerms] = useState(invoice.paymentTerms);
  const [status, setStatus] = useState(invoice.status);
  const [description, setDescription] = useState(invoice.description);
  const [items, setItems] = useState(invoice.items);
  const [total, setTotal] = useState(invoice.total);
  const [clientStreetAddress, setClientStreetAddress] = useState(
    invoice.clientAddress
  );
  const [senderAddress, setSenderAddress] = useState(invoice.senderAddress);

  const { updateInvoice } = useContext(InvoiceContext);
  const id = invoice.id;

  const navigate = useNavigate();

  let paymentTermList = [
    {
      id: "1",
      day: "1",
      select: false,
    },
    {
      id: "2",
      day: "7",
      select: false,
    },
    {
      id: "3",
      day: "14",
      select: false,
    },
    {
      id: "4",
      day: "30",
      select: false,
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

        <h2 className="mt-[24px] font-bold text-[24px]">Edit #{id}</h2>
        <h3 className="my-[24px] font-bold text-[12px] text-primary">
          Bill From
        </h3>

        <form className="text-gray-dark-63 font-[12px]" type="" action="">
          <Input
            id="streetAddress"
            name="streetAddress"
            label="Street Address"
            placeholder="19 Union Terrace"
            type="text"
            value={clientStreetAddress.street}
          />

          <div className="flex justify-between my-[24px]">
            <Input
              id="city"
              name="city"
              label="City"
              placeholder="London"
              type="text"
              value={clientStreetAddress.city}
            />
            <Input
              id="postCode"
              name="postCode"
              label="Post Code"
              placeholder="E1 3EZ"
              type="text"
              value={clientStreetAddress.postCode}
            />

            <Input
              id="Country"
              name="Country"
              label="Country"
              placeholder="United Kingdom"
              type="text"
              value={clientStreetAddress.country}
            />
          </div>

          <h2 className="my-[24px] font-bold text-[12px] text-primary">
            Bill To
          </h2>

          <Input
            id="Client's Name"
            name="Client's Name"
            label="Client's Name Address"
            // placeholder="United"
            type="text"
            value={clientName}
          />

          <Input
            id="ClientEmail"
            name="Client’s Email"
            label="Client’s Email"
            placeholder="johndoe@example.com"
            type="text"
            value={clientEmail}
          />

          <Input
            id="streetAddress2"
            name="StreetAddress"
            label="Street Address"
            placeholder="84 Church Way"
            type="text"
            value={senderAddress.street}
          />

          <div className="flex justify-between mb-[24px] gap-x-6">
            <Input
              id="city2"
              name="city2"
              label="City"
              placeholder="Bradford"
              type="text"
              value={senderAddress.city}
            />

            <Input
              id="PostCode2"
              name="PostCode2"
              label="PostCode"
              placeholder="BD1 9PB"
              type="text"
              value={senderAddress.postCode}
            />
            <Input
              id="Country"
              name="Country"
              label="Country"
              placeholder="BD1 9PB"
              type="text"
              value={senderAddress.country}
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
                {paymentTermList.map(({ id, day, select }) => (
                  <option
                    className="hover:text-primary"
                    selected={!select ? day === paymentTerms.toString() : false}
                    value={paymentTerms}
                  >
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
            value={description}
          />

          <h2 className="my-[24px] font-bold text-[18px] text-gray-dark-61">
            Item List
          </h2>

          <ItemList items={items} />

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
