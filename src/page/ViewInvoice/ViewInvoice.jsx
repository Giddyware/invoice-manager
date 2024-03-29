import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import Button from "../../components/Button";
import Header from "../../components/Header";
import Icon from "../../components/Icon";
import SideModal from "../../components/SlideModal";
import Receipt from "../../components/Receipt";
import EditInvoice from "../EditInvoice";
import { useContext, useEffect, useState } from "react";
import CenterModal from "../../components/CenterModal";
import { InvoiceContext } from "../../context/invoiceContext";

// const invoiceDetail = [
//   {
//     id: "1",
//     itemName: "Banner Design",
//     price: "156.00",
//     qty: "1",
//   },
//   { id: "2", itemName: "Email Design", price: "400.00", qty: "2" },
// ];

const ViewInvoice = () => {
  // CenterModal
  const [showCenterModal, setCenterModal] = useState(false);
  const openCenterModal = () => setCenterModal(true);
  const closeCenterModal = () => setCenterModal(false);

  const [showSideModal, setShowSideModal] = useState(false);
  const openSideModal = () => setShowSideModal(true);
  const closeSideModal = () => setShowSideModal(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { invoices } = useContext(InvoiceContext);
  let { id } = useParams();

  const [invoice, setInvoice] = useState({});
  let {
    // createdAt,
    paymentDue,
    description,
    // paymentTerms,
    items,
    clientName,
    clientEmail,
    clientAddress,
    status,
    total,
    senderAddress,
  } = invoice;

  useEffect(() => {
    let invoiceData = invoices.find((invoice) => invoice.id === id);
    setInvoice(invoiceData);
  }, [id, invoices]);

  return (
    <div className="flex flex-col bg-brand-100 lg:flex-row">
      <Header />
      <main className="px-[24px] h-full py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px] dark:bg-brand-900">
        <div
          onClick={() => navigate(-1)}
          className="flex items-baseline hover:cursor-pointer w-fit dark:text-neutral-100"
        >
          <Icon id="arrow-left" />
          <h3 className="ml-[24px] font-bold text-[12px]">Go back</h3>
        </div>
        <div className="mx-[24px] mt-[32px] mb-[16px] px-[24px] py-[24px] hidden rounded-150 md:flex items-baseline justify-between bg-neutral-100 dark:bg-brand-800">
          <div className="flex items-baseline justify-between flex-1 md:flex-shrink-0 md:flex-grow-0">
            <h2 className="text-gray-dark-63 md:mr-[16px]">status</h2>
            <Receipt status={`${status}`}>
              <p className="ml-[6px] capitalize">{status}</p>
            </Receipt>
          </div>
          <div className="font-bold dark:bg-brand-800 text-[12px] bg-neutral-100 px-[24px] text-neutral-100 sm:hidden md:block">
            <Link
              state={{ background: location }}
              // to="edit-invoice"
              onClick={openSideModal}
            >
              <button className="px-[24px] py-[16px] md:mr-[8px] bg-light-draft rounded-full capitalize text-brand-400 hover:bg-gray">
                edit
              </button>
            </Link>
            <button
              onClick={openCenterModal}
              className="px-[24px] py-[16px] md:mr-[8px] rounded-full bg-accent-urgent capitalize  hover:bg-accent-urgent-light"
            >
              delete
            </button>
            <button className="px-[24px] py-[16px] rounded-full bg-brand-450 capitalize hover:bg-brand-450-light">
              mark as paid
            </button>
          </div>
        </div>

        {!!invoice && (
          <div className="flex flex-col rounded-150 m-[24px] px-[24px] pb-[24px] bg-neutral-100 text-sm text-gray-dark-63 dark:text-neutral-100 dark:bg-brand-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="flex-1 font-bold text-gray-dark-63 md:mt-1">
                  #<span className="text-black text-[12px]">{id}</span>
                </h2>
                <h2>{description}</h2>
              </div>

              <div className="mt-[30px] ">
                <p>
                  {senderAddress?.street} <br />
                  {senderAddress?.city} <br />
                  {senderAddress?.postCode} <br />
                  {senderAddress?.country} <br />
                </p>
              </div>
            </div>

            <div className="mt-[30px] flex justify-between flex-wrap">
              <div className="basis-[95px]">
                <p>Invoice Date</p>
                <h2 className="text-black font-bold text-[15px]">
                  {/* 21 Aug 2021 */}
                  {/* {createdAt} */}
                </h2>
                <p>Payment Due</p>
                <h2 className="text-black font-bold text-[15px]">
                  {/* 20 Sep 2021 */}
                  {paymentDue}
                </h2>
              </div>

              <div className="basis-[95px]">
                <p>Bill To</p>
                <h2 className="text-black font-bold text-[15px]">
                  {clientName}
                </h2>

                <p>
                  {clientAddress?.street} <br />
                  {clientAddress?.city} <br />
                  {clientAddress?.postCode} <br />
                  {clientAddress?.country} <br />
                </p>
              </div>
              <div>
                <p className="basis-[95px]">Sent to</p>
                <h2 className="text-black font-bold text-[15px]">
                  {clientEmail}
                </h2>
              </div>
            </div>

            <div className=" mt-[40px] px-[24px] pt-[24px] bg-brand-100 dark:bg-brand-700 rounded-t-[8px]">
              {/* I'm not sure if it shounld be list or div */}

              {items?.map(({ id, name, quantity, price, total }) => (
                <ul key={name}>
                  <li className="flex items-center justify-between mb-[24px]">
                    <div>
                      <h2 className="font-bold text-black">{name}</h2>
                      <p>
                        <span>{quantity}</span> x <span>£ {price} </span>
                      </p>
                    </div>
                    <h2 className="text-bold text-[12px] font-bold">
                      £ {total}
                    </h2>
                  </li>
                </ul>
              ))}
            </div>

            <div className="flex justify-between items-center p-[24px] bg-brand-800 text-neutral-100 rounded-b-[8px] dark:bg-brand-900">
              <h2>Grand Total</h2>
              <h2 className="text-[20px] font-bold">£ {total}</h2>
            </div>
          </div>
        )}
      </main>

      <div className="font-bold text-[12px] mt-[56px] bg-neutral-100 px-[24px] py-[22px] flex justify-between items-center text-neutral-100 md:hidden">
        <Link
          state={{ background: location }}
          // to="/edit-invoice"
          onClick={openSideModal}
        >
          <button className="px-[24px] py-[16px] bg-light-draft rounded-full capitalize text-brand-400">
            edit
          </button>
        </Link>
        <button
          onClick={openCenterModal}
          className="px-[24px] py-[16px] rounded-full bg-accent-urgent capitalize"
        >
          delete
        </button>
        <button className="px-[24px] py-[16px] rounded-full bg-brand-450 capitalize">
          mark as paid
        </button>

        {/* <Button>hello</Button> */}
      </div>

      <CenterModal
        id={id}
        open={openCenterModal}
        close={closeCenterModal}
        showDialog={showCenterModal}
      />

      <SideModal
        showSideModal={showSideModal}
        open={openSideModal}
        close={closeSideModal}
        // invoice={invoice}
      >
        <EditInvoice invoice={invoice} />
      </SideModal>
    </div>
  );
};
export default ViewInvoice;
