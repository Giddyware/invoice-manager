import { createContext, useState } from "react";
import Clients from "../constants/data";

const InvoiceContext = createContext();

const InvoiceProvider = (props) => {
  const [invoices, setInvoices] = useState([...Clients]);

  const addInvoice = (name) => {
    const newInvoice = [...invoices, { name: name }];
    setInvoices(newInvoice);
  };

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice }}>
      {props.children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceContext, InvoiceProvider };
