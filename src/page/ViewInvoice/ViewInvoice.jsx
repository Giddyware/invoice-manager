import Header from "../../components/Header/Header";
import Icon from "../../components/Icon/Icon";
import Receipt from "../../components/Receipt/Receipt";

const invoiceDetail = [
  {
    id: "1",
    itemName: "Banner Design",
    price: "156.00",
    qty: "1",
  },
  { id: "2", itemName: "Email Design", price: "400.00", qty: "2" },
];

const ViewInvoice = () => {
  return (
    <div className="flex flex-col bg-gray-light lg:flex-row">
      <Header />
      <main className="px-[24px] h-full py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        <div className="flex items-baseline">
          <Icon id="arrow-left" />
          <h3 className="ml-[24px] font-bold text-[12px]">Go back</h3>
        </div>
        <div className="mx-[24px] mt-[32px] mb-[16px] px-[24px] py-[24px]  rounded-[8px] flex items-baseline justify-between bg-[white]">
          <h2 className="text-gray-dark-63">status</h2>
          <Receipt status="pending">
            <p className="ml-[6px] capitalize">{"pending"}</p>
          </Receipt>
        </div>

        <div className="flex flex-col rounded-[8px] m-[24px] px-[24px] pb-[24px] bg-[white] text-sm text-gray-dark-63">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="flex-1 font-bold text-gray-dark-63 md:mt-1">
                #<span className="text-black text-[12px]">XM9141</span>
              </h2>
              <h2>Graphic Design</h2>
            </div>

            <div className="mt-[30px] ">
              <p>
                19 Union Terrace <br />
                London <br />
                E1 3EZ <br />
                United Kingdom
              </p>
            </div>
          </div>

          <div className="mt-[30px] flex justify-between flex-wrap">
            <div className="basis-[95px]">
              <p>Invoice Date</p>
              <h2 className="text-black font-bold text-[15px]">21 Aug 2021</h2>
              <p>Payment Due</p>
              <h2 className="text-black font-bold text-[15px]">20 Sep 2021</h2>
            </div>

            <div className="basis-[95px]">
              <p>Bill To</p>
              <h2 className="text-black font-bold text-[15px]">Alex Grim</h2>

              <p>
                84 Church Way <br />
                Bradford <br />
                BD1 9PB <br />
                United Kingdom
              </p>
            </div>
            <div>
              <p className="basis-[95px]">Sent to</p>
              <h2 className="text-black font-bold text-[15px]">
                alexgrim@mail.com
              </h2>
            </div>
          </div>

          <div className=" mt-[40px] px-[24px] pt-[24px] bg-gray-light rounded-t-[8px]">
            {/* I'm not sure if it shounld be list or div */}

            {invoiceDetail.map(({ id, itemName, qty, price }) => (
              <ul key={id}>
                <li className="flex items-center justify-between mb-[24px]">
                  <div>
                    <h2 className="font-bold text-black">{itemName}</h2>
                    <p>
                      <span>{qty}</span> x <span>£ {price} </span>
                    </p>
                  </div>
                  <h2 className="text-bold text-[12px] font-bold">£ {price}</h2>
                </li>
              </ul>
            ))}
          </div>

          <div className="flex justify-between items-center p-[24px] bg-gray-dark-27 text-[white] rounded-b-[8px]">
            <h2>Grand Total</h2>
            <h2 className="text-[20px] font-bold">£ 556.00</h2>
          </div>
        </div>
      </main>

      <div className="mt-[56px] bg-[white] px-[24px] py-[22px] flex justify-between items-center text-[white] md:none">
        <button className="px-[24px] py-[16px] bg-draft-light rounded-full capitalize text-primary-light">
          edit
        </button>
        <button className="px-[24px] py-[16px] rounded-full bg-urgent capitalize">
          delete
        </button>
        <button className="px-[24px] py-[16px] rounded-full bg-primary capitalize">
          mark as paid
        </button>
      </div>
    </div>
  );
};
export default ViewInvoice;
