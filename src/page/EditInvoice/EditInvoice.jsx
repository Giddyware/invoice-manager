import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";

const EditInvoice = () => {
  return (
    <div className="flex flex-col bg-white-light lg:flex-row">
      <Header />

      <main className="px-[24px] h-screen py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
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

          <div className="flex justify-between">
            <div className="">
              <label className="my-[10px] block" htmlFor="city">
                City
              </label>
              <input
                className="mr-4 py-1 h-[48px] rounded-[4px] border-solid border border-gray"
                type="text"
                name="city"
                id="city"
              />
            </div>

            <div className="">
              <label className="my-[10px] block" htmlFor="Post Code">
                Post Code
              </label>
              <input
                className="py-1 h-[48px] rounded-[4px] border-solid border border-gray"
                type="text"
                name="Post Code"
                id="Post Code"
              />
            </div>
          </div>

          <label htmlFor="Country">Country</label>
          <input type="text" name="Country" id="Country" />

          <h2>Bill To</h2>

          <label htmlFor="Client's Name">Client's Name Address</label>
          <input type="text" name="Client's Name" id="Client's Name" />

          <label htmlFor="Client's Email">Client's Email Address</label>
          <input type="email" name="Client's Email" id="Client's Email" />

          <label htmlFor="street2">Street Address</label>
          <input type="text" name="street2" id="street2" />

          <label htmlFor="city2">City</label>
          <input type="text" name="city2" id="city2" />

          <label htmlFor="Post Code2">Post Code</label>
          <input type="text" name="Post Code2" id="Post Code2" />

          <label htmlFor="Country2">Country</label>
          <input type="text" name="Country2" id="Country2" />

          <label htmlFor="Invoice Date">Invoice Date</label>
          <input type="date" name="Invoice Date" id="Invoice Date" />

          <label htmlFor="Payment Terms">Payment Terms</label>
          <input type="select" name="Payment Terms" id="Payment Terms" />

          <label htmlFor="Project Description">Project Description</label>
          <input
            type="text"
            name="Project Description"
            id="Project Description"
          />

          <h2>Item List</h2>
          <label htmlFor="Item Name">Item Name</label>
          <input type="text" name="Item Name" id="Item Name" />

          <label htmlFor="Qty">Qty</label>
          <input type="number" name="Qty" id="Qty" />

          <label htmlFor="Price">Price</label>
          <input type="number" name="Price" id="Price" />

          <label htmlFor="Total">Total</label>
          <input type="number" name="Total" id="Total" />

          <label htmlFor="Item Name2">Item Name</label>
          <input type="text" name="Item Name2" id="Item Name2" />

          <label htmlFor="Qty2">Qty</label>
          <input type="number" name="Qty2" id="Qty2" />

          <label htmlFor="Price2">Price</label>
          <input type="number" name="Price2" id="Price2" />

          <label htmlFor="Total2">Total</label>
          <input type="number" name="Total2" id="Total2" />
        </form>
      </main>
    </div>
  );
};

export default EditInvoice;
