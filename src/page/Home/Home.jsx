import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
// import { ClientsData } from "../../App";
import { Auth } from "../../components/auth";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import SideModal from "../../components/SlideModal";
import { db } from "../../config/firebase";
import Clients from "../../constants/data";
import { InvoiceContext } from "../../context/invoiceContext";
import CreateInvoice from "../CreateInvoice/CreateInvoice";
import Empty from "../Empty/Empty";

const Home = () => {
  // const invoiceCollectionRef = collection(db, "invoice");
  // const clients = useContext(ClientsData);

  const { invoices } = useContext(InvoiceContext);
  const [showSideModal, setShowSideModal] = useState(false);
  const openSideModal = () => setShowSideModal(true);
  const closeSideModal = () => setShowSideModal(false);

  let length = invoices.length;

  // useEffect(() => {
  //   console.log(invoices);
  // }, [invoices]);

  // useEffect(() => {
  //   const getInvoice = async () => {
  //     //READ THE DATA
  //     // SET THE INVOICE LIST

  //     try {
  //       const data = await getDocs(invoiceCollectionRef);
  //       const fliterData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id,
  //       }));
  //       console.log("filtedData", fliterData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getInvoice();
  // }, [invoiceCollectionRef]);

  // console.log(Clients);

  return (
    <>
      {length > 1 ? (
        <div className="flex flex-col bg-gray-light lg:flex-row">
          <Header />
          <main className="px-[24px] py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
            <Nav length={length} open={openSideModal} />
            <div className="mt-[32px] mb-[80px]">
              {invoices.map((invoice) => (
                <Card key={invoice.id} {...invoice} />
              ))}
            </div>
          </main>
          {console.log(typeof length)}
        </div>
      ) : (
        <Empty />
      )}

      <SideModal
        showSideModal={showSideModal}
        open={openSideModal}
        close={closeSideModal}
      >
        {console.log(showSideModal)}
        <CreateInvoice />
      </SideModal>
    </>
  );
};
export default Home;
