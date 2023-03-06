import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect } from "react";
import { ClientsData } from "../../App";
import { Auth } from "../../components/auth";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { db } from "../../config/firebase";
// import Clients from "../../constants/data";

const Home = () => {
  const invoiceCollectionRef = collection(db, "invoice");
  const clients = useContext(ClientsData);

  useEffect(() => {
    console.log("context", clients);
  }, [clients]);

  useEffect(() => {
    const getInvoice = async () => {
      //READ THE DATA
      // SET THE INVOICE LIST

      try {
        const data = await getDocs(invoiceCollectionRef);
        const fliterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("filtedData", fliterData);
      } catch (error) {
        console.error(error);
      }
    };
    getInvoice();
  }, [invoiceCollectionRef]);

  // console.log(Clients);

  return (
    <div className="flex flex-col bg-gray-light lg:flex-row">
      <Header />
      <main className="px-[24px] py-[32px] md:py-[56px] md:px-[48px] lg:flex-1 lg:px-[140px] lg:py-[72px]">
        <Nav />
        <div className="mt-[32px] mb-[80px]">
          {clients.map((client) => (
            <Card key={client.id} {...client} />
          ))}
        </div>
        <Auth />
      </main>
    </div>
  );
};
export default Home;
