import { createContext, useState } from "react";
import Clients from "../constants/data";
import { randomDate, randomIdGen } from "../utils";

const InvoiceContext = createContext();

const InvoiceProvider = (props) => {
  const [invoices, setInvoices] = useState([...Clients]);

  // const addInvoice = (name) => {
  //   const newInvoice = [...invoices, { name: name }];
  //   setInvoices(newInvoice);
  // };

  // Todo: REMOVE THIS FROM HERE AFTER
  let todayDate = new Date().toISOString().slice(0, 10);

  const addInvoice = (
    clientName,
    description,
    paymentTerms,
    clientEmail,
    status,
    total
  ) => {
    setInvoices([
      ...invoices,
      {
        id: randomIdGen(),
        createdAt: todayDate,
        paymentDue: randomDate(),
        clientName,
        paymentTerms,
        clientEmail,
        status,
        description,
        total,
      },
    ]);
  };

  const deleteInvioce = (id) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
  };

  const updateInvoice = (id, updateInvoice) => {
    setInvoices(
      invoices.map((invoice) => (invoice.id ? updateInvoice : invoice))
    );
  };

  return (
    <InvoiceContext.Provider
      value={{ invoices, addInvoice, deleteInvioce, updateInvoice }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceContext, InvoiceProvider };
